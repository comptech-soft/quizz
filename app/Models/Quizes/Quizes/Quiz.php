<?php

namespace App\Models\Quizes\Quizes;

use Illuminate\Database\Eloquent\Model;
use DB;
use Exception;
use App\Models\Quizes\Questions\Question;

class Quiz extends Model
{

	
	protected $table = 'quizes';
	protected $guarded = ['id'];

	protected $appends = [
		'total_available_points',
	];

	public function questions()
	{
		return $this->hasMany(\App\Models\Quizes\Questions\Question::class, 'quiz_id')->orderBy('order_no');
	}

	public function getTotalAvailablePointsAttribute()
	{
		return $this->questions->sum('points');
	}

	protected static function prepareData(array $data)
	{
		$data['slug'] = str_slug($data['name']);
		return collect($data)->only(['name', 'slug', 'title', 'description', 'image_url', 'time', 'success_percentage'])->toArray();
	}

	protected function createQuestions(array $questions)
	{
		$result = [];
		foreach($questions as $i => $data)
		{
			$question = $this->questions()->create(Question::prepareData($data));
			$question->answers()->createMany($data['answers']);
			$result[] = $question;
		}
		return $result;
	}

	public static function createQuiz($data)
	{
		DB::beginTransaction();
		try
		{
			$quiz = self::create( self::prepareData($data) );
			$quiz->createQuestions($data['questions']);
		}
		catch(Exception $e)
		{
			DB::rollback();
			dd($e->getMessage());
		}
		DB::commit();
		dd('Success');
	}

}