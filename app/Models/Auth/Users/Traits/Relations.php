<?php

namespace App\Models\Auth\Users\Traits;

trait Relations
{

	public function profile()
    {
        return $this->hasOne(\App\Models\Auth\Profiles\Profile::class);
    }

}
