<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Sentinel;
use App\Models\Quizes\Questions\Question;
use DB;
use App\Models\Quizes\Useranswers\Useranswer;

class PlayquizController extends Controller
{

	public function index()
	{
		return view('frontend.play.index')->with(['app' => 'frontend']);
	}

	public function startContest(Request $request)
	{
		$user = Sentinel::registerAndActivate($request->player);
		$questions = Question::with(['answers'])->orderBy(DB::raw('RAND()'))->take( config('contest.number-of-questions') )->get();
		$user->questions()->attach($questions);
		return [
			'success' => true,
			'user' => $user,
			'questions' => $questions,
		];
	}

	public function sendResponses(Request $request)
	{
		$result = [];
		foreach($request->user_answers as $i => $response)
		{
			$_response = is_array($response['answer']) ? json_encode($response['answer']) : $response['answer'];
			$user_answer = Useranswer::where('user_id', $request->user['id'])->where('question_id', $response['question_id'])->first();
			if( is_null($user_answer) )
			{
				$result[] = Useranswer::create([
					'user_id' => $request->user['id'],
					'question_id' => $response['question_id'],
					'response' => $_response,
					'points' => Question::getPoints($response['question_id'], $response['answer']),
				]);
			}
			else
			{
				$user_answer->update([
					'response' => $_response,
					'points' => Question::getPoints($response['question_id'], $response['answer']),
				]);
				$result[] = $user_answer;
			}
		}
		return [
			'responses' => $result,
		];
	}
}