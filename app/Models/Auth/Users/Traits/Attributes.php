<?php

namespace App\Models\Auth\Users\Traits;

trait Attributes
{

	public function getFullNameAttribute()
	{
		return collect([$this->last_name, $this->first_name])->filter( function($value, $key){
			return strlen( trim($value) ) > 0;
		})->implode(', ');
	}

	public function getAvatarAttribute()
	{
		return 'css/admin/img/user2-160x160.jpg';
	}
}
