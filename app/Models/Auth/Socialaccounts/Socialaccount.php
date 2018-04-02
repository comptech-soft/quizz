<?php

namespace App\Models\Auth\Socialaccounts;

use Illuminate\Database\Eloquent\Model;

/*
| Traits
*/
use App\Models\Auth\Socialaccounts\Traits\Relations;
use App\Models\Auth\Socialaccounts\Traits\Searcheable;

class Socialaccount extends Model
{

	/*
	 | Traits declaration
	 */
	use 
		Relations,
		Searcheable
	;
	
	protected $table = 'users_social_accounts';

	protected $fillable = ['user_id', 'provider_user_id', 'provider', 'name', 'email', 'gender', 'avatar'];
}