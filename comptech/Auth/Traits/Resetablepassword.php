<?php

namespace Comptech\Auth\Traits;

use Reminder;
use Sentinel;
use Exception;
use Mail;

/*
 | Mailers
*/
use App\Mail\Auth\ResetPasswordCode; 

trait Resetablepassword
{

    public static function checkResetPasswordRequest($reset_password_code, $hashed_id)
    {
        if(! ($user = self::findByHash($hashed_id)) )
        {
            throw new Exception('No user (Invalid hash code)');
        }
        if(! ($reminder = Reminder::exists($user)) )
        {
            throw new Exception('No reminder found');
        }
        if(! ($reset_password_code === $reminder->code) )
        {
            throw new Exception('Invalid request');
        }
        return $user;
    }

    public static function sendResetPasswordCodeEmail($email, $role_slug)
    {
        try
        {
            $user = self::whereEmail($email)->first();
            if(! $user)
            {
                throw new Exception('User not found!');
            }
            $reminder = Reminder::exists($user) ?: Reminder::create($user);
            Mail::to($user->email)->send(new ResetPasswordCode($user, $reminder, $role_slug));
            return [
                'success'       => true, 
                'redirect'      => $role_slug,
                'notification'  => [
                    'type' => 'success',
                    'message' => 'The new password was saved. Please login with the new password.',
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
                    'message' =>  $e->getMessage(),
                ]
            ];
        }
    }
}