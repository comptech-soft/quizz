<?php

namespace App\Http\Controllers\Frontend\Students;

use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{

	public function index()
	{
		return view('frontend.students.welcome.index')->with(['app' => 'frontend']);
	}
	
}