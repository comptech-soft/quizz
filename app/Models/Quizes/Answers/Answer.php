<?php

namespace App\Models\Quizes\Answers;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Http\Request;
// use Exception;

class Answer extends Model
{

	
	protected $table = 'quiz_questons_answers';
	protected $guarded = ['id'];



	/*
	| Appended computed attributes
	*/
	// protected $appends = [
	// 	'items_count',
	// ];

	
}