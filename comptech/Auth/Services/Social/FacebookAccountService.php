<?php

namespace Comptech\Auth\Services\Social;

use Sentinel;
use Laravel\Socialite\Contracts\User as Provideruser;
use App\Models\Auth\Socialaccounts\Socialaccount;

class FacebookAccountService
{

	public function createOrGetUser(Provideruser $provider_user)
	{
		if($social_account = Socialaccount::byProviderAndId('facebook', $provider_user_id = $provider_user->getId()))
		{
			return $social_account->user;
		}
		$social_account = new Socialaccount([
			'provider_user_id' => $provider_user_id,
			'provider' => 'facebook',
			'name' => $name = $provider_user->getName(),
			'email' => $email = $provider_user->getEmail(),
			'avatar' => $provider_user->avatar_original,
			'gender' => $provider_user->user['gender']
		]);
		if(! ($user = Sentinel::findByCredentials(['email' => $email])) ) 
		{
			$user = Sentinel::registerAndActivate([
                'email' => $email,
                'password' => md5( rand(1,10000) . time() ),
            ]);
        }
        $social_account->user()->associate($user);
        $social_account->save();
        return $user;
	}

}