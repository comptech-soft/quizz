<?php

namespace App\Models\Auth\Socialaccounts\Traits;

trait Relations
{

	public function user()
	{
		return $this->belongsTo(\App\Models\Auth\Users\User::class);
	}

}
