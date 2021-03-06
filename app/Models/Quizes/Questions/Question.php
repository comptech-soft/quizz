<?php

namespace App\Models\Quizes\Questions;

use Illuminate\Database\Eloquent\Model;
use DB;

class Question extends Model
{

	
	protected $table = 'quiz_questions';
	protected $guarded = ['id'];

	public function answers()
	{
		return $this->hasMany(\App\Models\Quizes\Answers\Answer::class, 'question_id')->orderBy('order_no');
	}

	public static function getPoints($question_id, $user_response)
	{
		$question = self::find($question_id);
		return call_user_func(['self', 'isCorrect' . ucfirst($question->type)], $question, $user_response) ? $question->points : 0;
	}

	public static function isCorrectMatch($question, $user_response)
	{
		if( count($user_response) < $question->answers->count())
		{
			return false;
		}
		foreach($user_response as $i => $response)
		{
			if($response['answer_id'] != $response['response_id'])
			{
				return false;
			}
		}
		return true;
	}

	public static function isCorrectText($question, $user_response)
	{
		$accepted_answers = collect(explode(',', $question->correct_answer))->map( function($item) { return trim($item); });
		$result = $accepted_answers->first( function($item, $index) use ($user_response){ 
			return trim(strtolower($user_response)) == strtolower($item);
		});
		return ! is_null($result);
	}

	public static function isCorrectRadio($question, $user_response)
	{
		return trim( strtolower($question->correct_answer)) === trim(strtolower($user_response));
	}

	public static function isCorrectCheck($question, $user_response)
	{
		$user_answer = collect($user_response)->sortBy('selected')->map( function($item){
			return trim(strtolower($item['selected']));
		})->implode(',');

		$correct_answer = collect(json_decode($question->correct_answer))->sort()->map( function($item){
			return trim(strtolower($item));
		})->implode(',');

		return $user_answer === $correct_answer;
	}

	protected static function prepareData(array $data)
	{
		$result = collect($data)->only(['type', 'order_no', 'points', 'question', 'correct_answer', 'answer_description', 'answer_image_url'])->toArray();

		if( $result['type'] == 'check')
		{
			$result['correct_answer'] = json_encode(collect($result['correct_answer'])->map( function($item) {
				return $item['caption'];
			})->toArray());
		}
		else
		{
			if( $result['type'] == 'match')
			{
				$result['correct_answer'] = json_encode($result['correct_answer']);
			}
		}
		return $result;
	}

	public static function insertRecord($question)
	{
		$data = 
			collect($question)
			->only(['quiz_id', 'type', 'order_no', 'points', 'question', 'correct_answer', 'answer_description', 'answer_image_url'])
			->toArray();

		if( $data['type'] == 'check')
		{
			$data['correct_answer'] = json_encode(collect($data['correct_answer'])->map( function($item) {
				return $item['item'];
			})->toArray());
		}
		else
		{
			if( $data['type'] == 'match')
			{
				$data['correct_answer'] = json_encode($data['correct_answer']);
			}
		}

		DB::beginTransaction();
		try
		{
			$record = self::create($data);
			$record->answers()->createMany($question['answers']);
		}
		catch(Exception $e)
		{
			DB::rollback();
			return [
				'success' => false,
				'notification' => [
					'type' => 'danger',
					'message' => 'Something went wrong!'
				],
				'exception' => [
					'message' => $e->getMessage()
				]
			];
		}
		DB::commit();
		return [
			'success' => true,
			'notification' => [
				'type' => 'success',
				'message' => 'Success'
			],
			'exception' => NULL
		];
	}

	public static function updateRecord($question)
	{
		$data = 
			collect($question)
			->only(['quiz_id', 'type', 'order_no', 'points', 'question', 'correct_answer', 'answer_description', 'answer_image_url'])
			->toArray();
		DB::beginTransaction();
		try
		{
			$record = self::find($question['id']);
			$record->update($data);
			$record->answers()->delete();
			$record->answers()->createMany($question['answers']);
		}
		catch(Exception $e)
		{
			DB::rollback();
			return [
				'success' => false,
				'notification' => [
					'type' => 'danger',
					'message' => 'Something went wrong!'
				],
				'exception' => [
					'message' => $e->getMessage()
				]
			];
		}
		DB::commit();
		return [
			'success' => true,
			'notification' => [
				'type' => 'success',
				'message' => 'Success'
			],
			'exception' => NULL
		];
	}
}