<?php

namespace App\Http\Controllers\Admin\Quiz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quizes\Quizes\Quiz;

class CreateController extends Controller
{

	public function index()
	{
		return view('admin.quizes.create.index')->with(['app' => 'admin']);
	}

	public function insert(Request $request)
	{
		$create = Quiz::createQuiz($request->quiz);
		return $create;
	}
	
}