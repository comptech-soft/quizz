<?php

namespace App\Models\Quizes\Questions;

use Illuminate\Database\Eloquent\Model;

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
}