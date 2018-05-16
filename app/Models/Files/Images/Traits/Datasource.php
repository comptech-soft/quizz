<?php

namespace App\Models\Files\Images\Traits;

use Illuminate\Http\Request;

trait Datasource
{

	public static function viewDataSource(Request $request)
	{
		return self::makeDataViewResponse($request);
	}

}
