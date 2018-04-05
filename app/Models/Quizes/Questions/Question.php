<?php

namespace App\Models\Quizes\Questions;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Http\Request;
// use Exception;

class Question extends Model
{

	
	protected $table = 'quiz_questions';
	protected $guarded = ['id'];



	/*
	| Appended computed attributes
	*/
	// protected $appends = [
	// 	'items_count',
	// ];

	public function answers()
	{
		return $this->hasMany(\App\Models\Quizes\Answers\Answer::class, 'question_id')->orderBy('order_no');
	}
}