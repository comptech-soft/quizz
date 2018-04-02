<?php

namespace App\Http\Controllers\Frontend\Visitors;

use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{

	public function index()
	{
		return 
            view('frontend.visitors.welcome.index')
        ;
	}
}