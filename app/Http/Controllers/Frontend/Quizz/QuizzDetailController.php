<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quizes\Quizes\Quiz;

class QuizzDetailController extends Controller
{

	public function index(Request $request, $quiz_slug)
	{
		if( is_null($quiz = Quiz::where('slug', $quiz_slug)->first())  )
		{
			return redirect( route('quizz-index') );
		}	

		return 
            view('frontend.quizz-detail.index')
            ->withQuiz($quiz)
        ;
	}

	// public function fetch(Request $request)
	// {
	// 	return Quiz::latest()->paginate(6);
	// }
}