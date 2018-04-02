<?php

namespace App\Models\Auth\Roles\Traits;

use Illuminate\Http\Request;

trait Datasource
{

	public static function viewDataSource(Request $request)
	{
		return self::makeDataViewResponse(
			$request,
			self::query()->withCount('users')
		);
	}

}
