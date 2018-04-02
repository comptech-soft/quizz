<?php

namespace App\Models\Auth\Users;

use Cartalyst\Sentinel\Users\EloquentUser;

/*
| Traits
*/
use Comptech\Auth\Traits\Registerable;
use Comptech\Auth\Traits\Activable;
use Comptech\Auth\Traits\Loginable;
use Comptech\Auth\Traits\Resetablepassword;
use Comptech\Auth\Traits\Searchable;

use Comptech\Database\DataViewTrait;

use App\Models\Auth\Users\Traits\Attributes;
use App\Models\Auth\Users\Traits\Datasource;
use App\Models\Auth\Users\Traits\Actions;
use App\Models\Auth\Users\Traits\Relations;

class User extends EloquentUser
{

	/*
	 | Traits
	 */
	use 
		Searchable,
		Registerable,
		Activable,
		Loginable,
		Resetablepassword,
		Attributes,
		DataViewTrait,
		Datasource,
		Actions,
		Relations
	;
	
	/*
	| Computed attributes appended
	*/
	protected $appends = [
		'full_name',
		'avatar'
	];
}
