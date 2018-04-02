<?php

Route::group(['middleware' => 'visitor', 'namespace' => 'Frontend'], function(){

	/*
	| Pagina welcome visitor (utilizator nelogat)
	*/
	Route::get('/', 'Visitors\WelcomeController@index')->name('frontend-welcome-index');

	// Route::get('register/{usertype}', 'Auth\RegisterController@index')->name('register-index');
	// Route::post('register', 'Auth\RegisterController@register')->name('register');

	// Route::post('subscriptions-types/list', 'Auth\SubscriptionsController@getList')
	// 	->name('frontend-subscriptions-types-get-list');
	// Route::post('subscriptions-types/select', 'Auth\SubscriptionsController@getVueSelectItems')
	// 	->name('frontend-subscriptions-types-select');

	// Route::post('subscriptions-requests/insert', 'Auth\SubscriptionsController@insert')
	// 	->name('subscriptions-requests-insert');

	// Route::get('login/{usertype}', 'Auth\LoginController@index')->name('login-index');
	// Route::post('login/{usertype}', 'Auth\LoginController@login')->name('login');

});