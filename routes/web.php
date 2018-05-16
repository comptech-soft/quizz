<?php

Route::post('upload-image', 'System\UploadController@uploadImage')->name('upload-image');

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
	Route::post('quizez/populate', 'Quiz\ListController@populate')->name('quiz-list-populate');
	Route::post('quizez/delete', 'Quiz\ListController@delete')->name('quiz-list-delete');
	Route::post('quizez/update', 'Quiz\ListController@update')->name('quiz-list-update');

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
