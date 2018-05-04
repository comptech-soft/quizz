<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Auth\Users\User;

class LoginController extends Controller
{

    // public function login(Request $request)
    // {
    //     return view('admin.visitors.login.index')->with(['app' => 'admin']);
    // }

    public function logout()
    {
        User::logout();
        return ['url' => route('welcome-index', ['app' => 'admin'])];
    }
    
}
