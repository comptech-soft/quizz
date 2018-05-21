<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use App\Models\Quizes\Quizes\Quiz;

class PlayquizController extends Controller
{

	public function index()
	{
		return view('frontend.play.index')->with(['app' => 'frontend']);
	}

	
}