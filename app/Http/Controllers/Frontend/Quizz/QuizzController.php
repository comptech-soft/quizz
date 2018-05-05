<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quizes\Quizes\Quiz;

class QuizzController extends Controller
{

	public function index()
	{
		return view('frontend.quizz.index')->with(['app' => 'frontend']);
	}

	public function fetch(Request $request)
	{
		return Quiz::latest()->paginate(6);
	}
}