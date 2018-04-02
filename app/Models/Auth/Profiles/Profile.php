<?php

namespace App\Models\Auth\Profiles;

use Illuminate\Database\Eloquent\Model;

/*
| Traits
*/
use App\Models\Auth\Profiles\Traits\Relations;

class Profile extends Model
{

	/*
	 | Traits declaration
	 */
	use 
		Relations
	;
	
	protected $table = 'user_profiles';
	protected $guarded = ['id'];
}