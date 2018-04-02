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
        ];
    }

}
