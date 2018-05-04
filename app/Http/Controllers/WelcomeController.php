<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Sentinel;

class WelcomeController extends Controller
{

	public function index($app = NULL)
	{
		if( ! in_array($app, ['admin']) )
		{
			$app = NULL;
		}
		$user = Sentinel::check();
		if(! $user )
		{
			if( $app == 'admin' )
			{
				return view('frontend.visitors.welcome.index')->with(['app' => 'admin']);
			}
			return view('frontend.visitors.welcome.index')->with(['app' => 'frontend']);
		}
		if( $app == 'admin' )
		{
			return view('admin.welcome.index')->with(['app' => 'admin']);
		}
		return view('frontend.visitors.welcome.index')->with(['app' => 'frontend']);
	}
	
}