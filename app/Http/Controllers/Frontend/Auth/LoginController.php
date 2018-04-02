<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Sentinel;

use App\Models\Auth\Users\User;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        return $result = User::login($request, 'student');
    }

    public function logout()
    {
        /*
        | Perform the logout
        */
        User::logout();

        /*
        | Redirect catre home pageul general
        */
        return ['url' => route('frontend-welcome-index')];
    }
    
}
