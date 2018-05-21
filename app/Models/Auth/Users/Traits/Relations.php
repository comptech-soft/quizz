<?php

namespace App\Models\Auth\Users\Traits;

trait Relations
{

	public function profile()
    {
        return $this->hasOne(\App\Models\Auth\Profiles\Profile::class);
    }

    public function questions()
    {
    	return $this->belongsToMany(\App\Models\Quizes\Questions\Question::class, 'users_questions')->withTimestamps();
    }
}
