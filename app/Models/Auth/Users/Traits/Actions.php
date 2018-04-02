<?php

namespace App\Models\Auth\Users\Traits;

use Illuminate\Http\Request;
use Sentinel;
use Carbon;
use DB;

trait Actions
{

	protected static $messages = [

		'insert' => [
			'success' => 'The User was added successfully',
			'failed' => 'Something went wrong while trying to add the User'
		],

		'update' => [
			'success' => 'The User was updated successfully',
			'not-be-updated' => 'The User can not be updated',
			'failed' => 'Something went wrong while trying to update the User'
		],

		'delete' => [
			'success' => 'The User was deleted successfully',
			'not-be-deleted' => 'The User can not be deleted',
			'failed' => 'Something went wrong while trying to delete the User'
		]

	];

	protected static function requestToData(Request $request, $action)
	{
		return [
			'email' => $request->email,
			'first_name' => $request->first_name,
			'last_name' => $request->last_name,
			'password' => $request->password,
		];
	}

	public static function insertRecord(Request $request)
	{
		try
		{

			/*
			| DB Transaction
			| Create user
			| Attaching the role
			| Create profile
			*/
			DB::transaction(function() use ($request){
				
				/*
				| Create the user
				*/
				$user = Sentinel::register(self::requestToData($request, 'insert'));
				
				/*
				| Attaching the role
				*/
				$role = Sentinel::findRoleById($request->role_id);
				$role->users()->attach($user);
				
				/*
				| Create the profile
				*/
				$user->profile()->create([
					'addressing' => $request->addressing,
					'date_of_birth' => Carbon\Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d'),
					'gender' => $request->gender,
					'status' => $request->status,
					'phone_number' => $request->phone_number
				]);
			});
			
			return [
                'success'       => true, 
                'redirect'      => NULL,
                'record'        => NULL,
                'notification'  => [
                    'type' => 'success',
                    'message' => self::$messages['insert']['success'],
                ]
            ];
		}
		catch(Exception $e)
		{
			return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  self::$messages['insert']['failed'],
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
		}
	}

}