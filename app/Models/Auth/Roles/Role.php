<?php

namespace App\Models\Auth\Roles;

use Cartalyst\Sentinel\Roles\EloquentRole;

use Comptech\Database\DataViewTrait;
use Comptech\Database\DataViewActionsTrait;

use App\Models\Auth\Roles\Traits\Datasource;
use App\Models\Auth\Roles\Traits\Actions;

class Role extends EloquentRole
{

	use 
		DataViewTrait,
		DataViewActionsTrait,
		Datasource,
		Actions
	;
}