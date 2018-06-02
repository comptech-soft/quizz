<?php

namespace App\Models\Quizes\Userrandomcontests;

use Illuminate\Database\Eloquent\Model;

class Randomcontest extends Model
{
	
	protected $table = 'users_random_contests';
	protected $guarded = ['id'];

	public function user()
    {
    	return $this->belongsTo(\App\Models\Auth\Users\User::class);
    }

}