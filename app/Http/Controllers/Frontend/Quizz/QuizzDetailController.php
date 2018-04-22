<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Quizes\Quizes\Quiz;
use App\Models\Quizes\Solvings\Solving;
use App\Models\Quizes\Responses\Response;

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

	public function getRecord(Request $request)
	{
		return Quiz::with([
			'questions.answers'
		])
		->where('id', $request->id)
		->first();
	}

	public function start(Request $request)
	{
		$solving = Solving::where('quiz_id', $request->quiz_id)->where('user_id', $request->user_id)->whereStatus('started')->first();
		if( is_null($solving) )
		{
			return Solving::create([
				'quiz_id' => $request->quiz_id,
				'user_id' => $request->user_id,
				'status' => 'started',
				'started_at' => Carbon::now(),
			]);
		}
		$solving->update(['started_at' => Carbon::now()]);
		return $solving;
	}

	public function saveResponses(Request $request)
	{
		$result = [];
		foreach($request->user_answers as $i => $response)
		{
			$record = Response::where('solving_id', $request->solving_id)->where('quiz_id', $request->quiz_id)->where('question_id', $response['question_id'])->first();
			if( is_null($record) )
			{
				$result[] = Response::create([
					'solving_id' => $request->solving_id,
					'quiz_id' => $request->quiz_id,
					'question_id' => $response['question_id'],
					'response' => is_array($response['answer']) ? json_encode($response['answer']) : $response['answer'],
				]);
			}
			else
			{
				$record->update([
					'response' => is_array($response['answer']) ? json_encode($response['answer']) : $response['answer'],
				]);
				$result[] = $record;
			}
		}
		return $result;
	}
}