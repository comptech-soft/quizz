<?php

namespace App\Models\System;

class Navbar
{

	public static function get($user, $app)
	{
		/*
		| $app = admin | frontend
		*/

		$result = [
			'current' => NULL,
			'options' => [],
		];

		if( $app == 'frontend' )
		{
			if($user)
			{
				$result['options'][] = [
        			'id' => 'quizz',
        			'caption' => 'Quizes',
        		];
        		$result['options'][] = [
        			'id' => 'logout',
        			'caption' => 'Logout'
        		];
			}
			else
			{

				$result['options'][] = [
        			'id' => 'photos',
        			'caption' => __('navbar.Photos Gallery'),
        			'endpoint' => 'photos-gallery'
        		];

        		$result['options'][] = [
        			'id' => 'videos',
        			'caption' => __('navbar.Videos Gallery'),
        			'endpoint' => 'videos-gallery'
        		];

				/*
				$result['options'][] = [
        			'id' => 'login',
        			'caption' => 'Login'
        		];
        		$result['options'][] = [
        			'id' => 'register',
        			'caption' => 'Register'
        		];
        		*/
			}
		}
		else
		{
			if($user)
			{
				$result['options'][] = [
        			'id' => 'quizes',
        			'caption' => 'Quizes'
        		];

				$result['options'][] = [
        			'id' => 'logout',
        			'caption' => 'Logout'
        		];
			}
			else
			{
				$result['options'][] = [
        			'id' => 'login',
        			'caption' => 'Login'
        		];
			}
		}

		return $result;
	}
	
}