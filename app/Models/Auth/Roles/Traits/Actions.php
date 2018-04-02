<?php

namespace App\Models\Auth\Roles\Traits;

use Illuminate\Http\Request;

trait Actions
{

	protected static $messages = [

		'insert' => [
			'success' => 'The Role was added successfully',
			'failed' => 'Something went wrong while trying to add the Role'
		],

		'update' => [
			'success' => 'The Role was updated successfully',
			'not-be-updated' => 'The Role can not be updated',
			'failed' => 'Something went wrong while trying to update the Role'
		],

		'delete' => [
			'success' => 'The Role was deleted successfully',
			'not-be-deleted' => 'The Role can not be deleted',
			'failed' => 'Something went wrong while trying to delete the Role'
		]

	];

	protected static function requestToData(Request $request, $action)
	{
		return [
			'name' => $request->name,
			'slug' => str_slug($request->name),
		];
	}

	public static function canBeUpdated($id, Request $request)
	{
		return false;
	}

	public static function canBeDeleted($id, Request $request)
	{
		return false;
	}	

}
