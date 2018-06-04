<?php

Route::post('validation', 'Utilities\ValidationController@veeValidate')->name('validate');
Route::post('upload-image', 'System\UploadController@uploadImage')->name('upload-image');

Route::get('play-quiz', 'Frontend\Quizz\PlayquizController@index')->name('play-quiz-index');
Route::post('play-quiz/start-contest', 'Frontend\Quizz\PlayquizController@startContest')->name('play-quiz-start-contest');
Route::post('play-quiz/send-responses', 'Frontend\Quizz\PlayquizController@sendResponses')->name('play-quiz-send-responses');

Route::post('get-ranking', 'Frontend\Quizz\RankingController@getRanking')->name('get-ranking');

Route::get('photos-gallery', 'Frontend\Media\PhotosgalleryController@index')->name('photos-gallery-index');
Route::get('videos-gallery', 'Frontend\Media\VideosgalleryController@index')->name('videos-gallery-index');

/*
| FRONTEND
*/
Route::group(['middleware' => 'visitor', 'namespace' => 'Frontend'], function(){
	Route::get('login', 'Auth\LoginController@index')->name('frontend-index');
	Route::post('login', 'Auth\LoginController@login')->name('login');
});

Route::group(['middleware' => 'authenticated', 'namespace' => 'Frontend'], function(){

	// Route::get('/', 'Visitors\WelcomeController@index')->name('frontend-index');

	Route::post('logout', 'Auth\LoginController@logout')->name('logout');

	Route::get('quiz', 'Quizz\QuizzController@index')->name('quizz-index');
	Route::post('quizes/fetch', 'Quizz\QuizzController@fetch')->name('quizz-fetch');

	Route::get('quiz-detail/{quiz_slug}', 'Quizz\QuizzDetailController@index')->name('quizz-detail-index');
	Route::post('quiz-detail/get-record', 'Quizz\QuizzDetailController@getRecord')->name('quiz-detail-get-record');
	Route::post('quiz-detail/start', 'Quizz\QuizzDetailController@start')->name('quiz-detail-start');
	Route::post('quiz-detail/sending-responses', 'Quizz\QuizzDetailController@saveResponses')->name('quiz-detail-sending-responses');

});

/*
| ADMIN
*/
Route::group(['middleware' => 'admin', 'namespace' => 'Admin', 'prefix' => 'admin'], function(){

	Route::post('logout', 'Auth\LoginController@logout')->name('admin-logout');


	/* ======================================
	| QUIZES
	| =======================================*/
	/* #1. Quizes list */
	Route::get('quizes/list', 'Quiz\ListController@index')->name('quiz-list-index');
	Route::post('quizes/populate', 'Quiz\ListController@populate')->name('quiz-list-populate');
	Route::post('quizes/delete', 'Quiz\ListController@delete')->name('quiz-list-delete');
	Route::post('quizes/update', 'Quiz\ListController@update')->name('quiz-list-update');

	Route::post('quizes/questions/populate', 'Quiz\ListController@getQuestions')->name('quiz-questions-populate');
	Route::post('quizes/questions/insert', 'Quiz\ListController@insertQuestion')->name('quiz-questions-insert');
	
	/* #2. Creating a quiz */
	Route::get('quizes/new', 'Quiz\CreateController@index')->name('quiz-create-index');
	Route::post('quizes/insert', 'Quiz\CreateController@insert')->name('quiz-create-insert');
});

/*
| FREE ROUTES
*/
Route::get('/{app?}', 'WelcomeController@index')->name('welcome-index');
// Route::get('admin', 'WelcomeController@index')->name('welcome-admin-index');

Route::post('get-system-configuration', 'System\ConfigurationController@get')->name('get-system-configuration');
