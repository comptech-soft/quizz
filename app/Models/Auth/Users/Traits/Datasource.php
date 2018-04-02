<?php

namespace App\Models\Auth\Users\Traits;

use Illuminate\Http\Request;
use Sentinel;


trait Datasource
{

	public static function viewDataSource(Request $request)
	{
		return self::makeDataViewResponse(
			$request,
			self::query()->with(['roles'])
		);
	}

	public static function getUsersByRole($role_slug)
	{
		$role = Sentinel::findRoleBySlug($role_slug);
		return $role->users();
	}

	public static function getSuppliers()
	{
		return self::getUsersByRole('supplier');
	}

	public static function getCustomers()
	{
		return self::getUsersByRole('customer');
	}

	public static function getSuppliersCount()
	{
		return self::getSuppliers()->count();
	}

	public static function getCustomersCount()
	{
		return self::getCustomers()->count();
	}
}
