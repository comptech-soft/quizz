<?php

namespace App\Models\Quizes\Useranswers;

use Illuminate\Database\Eloquent\Model;

class Useranswer extends Model
{
	
	protected $table = 'users_answers';
	protected $guarded = ['id'];

}