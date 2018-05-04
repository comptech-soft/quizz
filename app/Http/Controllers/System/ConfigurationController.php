<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Sentinel;
use App\Models\System\Navbar;

class ConfigurationController extends Controller
{

    public function get(Request $request)
    {

        return [
            'user' =>  $user = Sentinel::check(),
            
            'config' => [
            	'base_url' => config('app.url'),
            	'logo' => asset('images/logo.png'),
            	'app' => $request->app,
                'roles' => $user ? $user->roles : [],
            ],

            'navbar' => Navbar::get($user, $request->app),
        ];
    }

}
