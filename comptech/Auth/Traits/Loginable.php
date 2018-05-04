<?php

namespace Comptech\Auth\Traits;

use Illuminate\Http\Request;
use Sentinel;
use Exception;
use Cartalyst\Sentinel\Checkpoints\ThrottlingException;
use Cartalyst\Sentinel\Checkpoints\NotActivatedException;

trait Loginable
{

    public static function loginRules()
    {
        return [
            'email'     => 'required|email',
            'password'  => 'required'
        ];
    }

    protected static function authenticate(Request $request)
	{
		return Sentinel::authenticate(
			[
				'email' => $request->email, 
				'password' => $request->password
			], 
			(bool) $request->get('remember-me')
		);
	}

	public static function login(Request $request, $role_slug)
	{
		try
        {
            if( ! ($user = self::authenticate($request))  )
            {
                throw new Exception('Wrong credentials');
            } 

            if( ! $user->hasAccess([$role_slug]))
            {
                Sentinel::logout($user, true);
                throw new Exception('Do not have this permission [' . $role_slug . ']');
            } 
            /*
            | Redirectul se poate face in functie de rolul userului
            */
            return [
                'success'       => true, 
                'redirect'      => route('welcome-index', ['app' => $role_slug]),
                'notification'  => [
                    'type' => 'success',
                    'message' => 'Successfull login',
                ]
            ];
        }
        catch(ThrottlingException $e)
        {
            return [
                'success'       => false, 
                'redirect'      => null,
                'notification'  => [
                    'type' => 'danger',
                    'message' => $e->getMessage() . ' (You are banned for ' . $e->getDelay() .' seconds)',
                ]
            ];
        }
        catch(NotActivatedException $e)
        {
            return [
                'success'       => false, 
                'redirect'      => null,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  $e->getMessage(),
                ]
            ];
        }
        catch(Exception $e)
        {
            return [
                'success'       => false, 
                'redirect'      => null,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  $e->getMessage(),
                ]
            ];
        }
	}

    public static function logout($role_slug = NULL)
    {
        try
        {
            Sentinel::logout();
            if($role_slug)
            {
                return [
                    'success'       => true,
                    'redirect'      => route($role_slug . '-login-index'),
                    'notification'  => [
                        'type' => 'success',
                        'message' => 'Successfully logout',
                    ]
                ];
            }
            return [
                'success'       => true,
                'redirect'      => route('frontend-welcome-index'),
                'notification'  => [
                    'type' => 'success',
                    'message' => 'Successfully logout',
                ]
            ];
        }
        catch(Exception $e)
        {
            return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  'Something went wrong while logout',
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
        }
    }
}