<?php

namespace App\Models\Auth\Socialaccounts\Traits;

trait Searcheable
{

	public static function byProviderAndId($provider, $provider_user_id)
	{
		return self::where('provider', $provider)->where('provider_user_id', $provider_user_id)->first();
	}

}
