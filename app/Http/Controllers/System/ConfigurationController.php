<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Sentinel;

class ConfigurationController extends Controller
{

    public function get(Request $request)
    {

        return [
            'user' =>  $user = Sentinel::check(),
            
            'config' => [
            	'base_url' => config('app.url'),
            	'logo' => asset('images/logo.png'),
            ],

            'navbar' => [
            	'current' => NULL,
            	'options' => 
	            	$user 
	            	? 
	            	[
	            		[
	            			'id' => 'logout',
	            			'caption' => 'Logout'
	            		],
	            	]
	            	:
	            	[
	            		[
	            			'id' => 'login',
	            			'caption' => 'Login'
	            		],

	            		[
	            			'id' => 'register',
	            			'caption' => 'Register'
	            		]
	            	]
            ]
        ];
    }

}
