<?php

namespace App\Models\Quizes\Quizes;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Http\Request;
// use Exception;

class Quiz extends Model
{

	
	protected $table = 'quizes';
	protected $guarded = ['id'];

	/*
	| Appended computed attributes
	*/
	// protected $appends = [
	// 	'items_count',
	// ];

	public function questions()
	{
		return $this->hasMany(\App\Models\Quizes\Questions\Question::class, 'quiz_id')->orderBy('order_no');
	}
}