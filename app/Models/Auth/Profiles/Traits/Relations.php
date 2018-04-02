<?php

namespace App\Models\Auth\Profiles\Traits;

trait Relations
{

	public function user()
    {
    	return $this->belongsTo(\App\Models\Auth\Users\User::class);
    }

}
