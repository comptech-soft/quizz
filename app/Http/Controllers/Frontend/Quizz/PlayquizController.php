<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Sentinel;
use DB;
use Exception;
use Carbon\Carbon;
use App\Models\Quizes\Questions\Question;
use App\Models\Quizes\Useranswers\Useranswer;
use App\Models\Quizes\Userrandomcontests\Randomcontest;

class PlayquizController extends Controller
{

	public function index()
	{
		return view('frontend.play.index')->with(['app' => 'frontend']);
	}

	public function startContest(Request $request)
	{

		DB::beginTransaction();
		try
		{
			$user = Sentinel::registerAndActivate($request->player);
			$contest = Randomcontest::create([
				'user_id' => $user->id,
				'status' => 'started',
				'start_at' => Carbon::now(),
			]);
			$questions = Question::with(['answers'])->orderBy(DB::raw('RAND()'))->take( config('contest.number-of-questions') )->get()->map( function($question) use ($contest) {
					$question->contest_id = $contest->id;
					return $question;
			});

			$attached = $questions->keyBy('id')->map( function($question){
				return [
					'contest_id' => $question->contest_id
				];
			})->toArray();
			$user->questions()->attach($attached);
		}
		catch(Exception $e)
		{
			DB::rollback();
			return [
				'success' => false,
				'exception' => [
					'message' => $e->getMessage(),
					'file' => $e->getFile(),
					'line' => $e->getLine(),
				]
			];
		}
		DB::commit();
		return [
			'success' => true,
			'user' => $user,
			'questions' => $questions,
			'contest' => $contest,
			'attached' => $attached,
		];
	}

	public function sendResponses(Request $request)
	{
		DB::beginTransaction();
		try
		{
			$result = [];
			$points = 0;
			foreach($request->user_answers as $i => $response)
			{
				$_response = is_array($response['answer']) ? json_encode($response['answer']) : $response['answer'];
				
				$user_answer = 
					Useranswer::where('user_id', $request->user['id'])
					->where('question_id', $response['question_id'])
					->where('contest_id', $request->contest_id)
					->first();
				
				$_points = Question::getPoints($response['question_id'], $response['answer']);

				$points += $_points;

				if( is_null($user_answer) )
				{
					$result[] = Useranswer::create([
						'user_id' => $request->user['id'],
						'question_id' => $response['question_id'],
						'contest_id' => $request->contest_id,
						'response' => $_response,
						'points' => $_points,
					]);
				}
				else
				{
					$user_answer->update([
						'response' => $_response,
						'points' => $_points,
					]);
					$result[] = $user_answer;
				}
			}
			$contest = Randomcontest::where('id', $request->contest_id)->first();
			$contest->update([
				'status' => 'finished',
				'finished_at' => Carbon::now(),
				'points' => $points,
			]);
		}
		catch(Exception $e)
		{
			DB::rollback();
			return [
				'success' => false,
				'exception' => [
					'message' => $e->getMessage(),
					'file' => $e->getFile(),
					'line' => $e->getLine(),
				]
			];
		}
		DB::commit();
		return [
			'responses' => $result,
			'contest' => $contest,
		];
	}
}