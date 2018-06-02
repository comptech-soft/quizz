<?php

namespace App\Http\Controllers\Frontend\Quizz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Sentinel;
use DB;
// use Exception;
// use Carbon\Carbon;
// use App\Models\Quizes\Questions\Question;
// use App\Models\Quizes\Useranswers\Useranswer;
use App\Models\Quizes\Userrandomcontests\Randomcontest;

class RankingController extends Controller
{

	public function getRanking(Request $request)
	{
		return 
			Randomcontest::with(['user'])
			->where('status', 'finished')
			->orderBy('points', 'desc')
			->orderBy(DB::raw('TIMESTAMPDIFF(SECOND, start_at, finished_at)', 'asc'))
			->paginate(6)
		;
	}

}