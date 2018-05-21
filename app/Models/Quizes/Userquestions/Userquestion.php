<?php

namespace App\Models\Quizes\Userquestions;

use Illuminate\Database\Eloquent\Model;

class Userquestion extends Model
{
	
	protected $table = 'users_questions';
	protected $guarded = ['id'];

}