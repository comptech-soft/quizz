<?php

namespace Comptech\Auth\Traits;

use Illuminate\Http\Request;
use Sentinel;
use Activation;
use Mail;
use Exception;

/*
 | Mailers
*/
use App\Mail\Auth\AccountActivation; 

trait Registerable
{

    public static function registerRules()
    {
        return [
            'email'                 => 'required|email|unique:users',
            'first_name'            => 'required',
            'last_name'             => 'required',
            'password'              => 'required',
            'password_confirmation' => 'same:password',
            'agree_terms'           => 'accepted'
        ];
    }
	
    public static function register(Request $request, $role_slug)
    {
        try
        {
            $role = Sentinel::findRoleBySlug($role_slug);
            if( ! $role )
            {
                throw new Exception('The role ' . $role_slug . ' is not defined.');
            }
            $user = Sentinel::register($request->all());
            $activation = Activation::create($user);
            $role->users()->attach($user);
            
            /*
            | Pot trimite email cu send sau queue
            */
            Mail::to($user->email)->send(new AccountActivation($user, $activation, $role));

            /*
            | Redirectul se poate face in functie de rolul userului
            */
            return [
                'success'       => true, 
                'redirect'      => $role_slug,
                'notification'  => [
                    'type' => 'success',
                    'message' => 'Successfull create account',
                ]
            ];
        }
        catch(Exception $e)
        {
            if($user)
            {
                $user->delete();
            }
            return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  $e->getMessage(),
                ]
            ];
        }
    }

}