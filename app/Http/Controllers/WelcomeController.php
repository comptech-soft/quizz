<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Sentinel;
use App\Models\Quizes\Quizes\Quiz;


class WelcomeController extends Controller
{

	public function index($app = NULL)
	{


/*
		$create = Quiz::createQuiz([
			'name' => 'Pascal. Expresii logice',
			'title' => 'Expresii logice in Pascal',
			'description' => 'Evaluarea expresiilor logice in Pascal',
			'image_url' => 'images/quizes/italy.jpg',
			'time' => 60,
			'success_percentage' => 90,
			'questions' => [
				
				[
					'type' => 'radio',
					'order_no' => 1,
					'points' => 10,
					'question' => 'Variabila x este de tip real. Care dintre următoarele expresii Pascal are valoarea true dacă și numai dacă numărul real memorat în variabila x aparține intervalului (5, 8]?',
					'correct_answer' => 'd',
					'answer_description' => NULL,
					'answer_image_url' => NULL,
					'answers' => [
						[
							'caption' => '(x < 8) and (x >= 5)',
							'value' => 'a',
							'order_no' => 1,
						],
						[
							'caption' => '(x <= 8) or (x > 5)',
							'value' => 'b',
							'order_no' => 2,
						],
						[
							'caption' => '(x > 8) and (x <= 5)',
							'value' => 'c',
							'order_no' => 3,
						],
						[
							'caption' => '(x <= 8) and (x > 5)',
							'value' => 'd',
							'order_no' => 4,
						]
					]
				],

				[
					'type' => 'radio',
					'order_no' => 2,
					'points' => 10,
					'question' => 'Variabilele x si y sunt de tip integer. Care dintre următoarele expresii Pascal are valoarea true dacă și numai dacă valorile nenule memorate în variabilele x și y sunt egale?',
					'correct_answer' => 'a',
					'answer_description' => NULL,
					'answer_image_url' => NULL,
					'answers' => [
						[
							'caption' => '(x mod y = 0) and (y mod x = 0) and (x * y > 0)',
							'value' => 'a',
							'order_no' => 1,
						],
						[
							'caption' => '(x <= y) and (y < x)',
							'value' => 'b',
							'order_no' => 2,
						],
						[
							'caption' => '(x <= y) or (y <= x)',
							'value' => 'c',
							'order_no' => 3,
						],
						[
							'caption' => 'x * x = y * y',
							'value' => 'd',
							'order_no' => 4,
						]
					]
				],

				[
					'type' => 'radio',
					'order_no' => 3,
					'points' => 10,
					'question' => 'Care dintre următoarele expresii Pascal are valoarea true dacă și numai dacă numărul real memorat în variabila x se afla în intervalul (-2, 2)?',
					'correct_answer' => 'b',
					'answer_description' => NULL,
					'answer_image_url' => NULL,
					'answers' => [
						[
							'caption' => 'x * x <= 0',
							'value' => 'a',
							'order_no' => 1,
						],
						[
							'caption' => '4 - x * x > 0',
							'value' => 'b',
							'order_no' => 2,
						],
						[
							'caption' => '(2 < x) and (x < -2)',
							'value' => 'c',
							'order_no' => 3,
						],
						[
							'caption' => '(x - 2) * (x + 2) > 0',
							'value' => 'd',
							'order_no' => 4,
						]
					]
				],

			]
		]);

		dd('--');
		*/

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
		if( $user->inRole('admin') )
		{
			return view('admin.welcome.index')->with(['app' => 'admin']);
		}
		return view('frontend.visitors.welcome.index')->with(['app' => 'frontend']);
	}
	
}