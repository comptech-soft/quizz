<?php

namespace Comptech\Auth\Traits;

use Sentinel;
use App\Models\Auth\Activations\Activation;
use Exception;

trait Activable
{

    public static function activate($activation_code, $redirect_route)
    {
        try
        {
            $activation = Activation::whereCode($activation_code)->first();
            if(! $activation)
            {
                throw new Exception('No activation code or invalid activation code');
            }
            if($activation->completed)
            {
                throw new Exception('Activation already completed');
            }
            $user = \Sentinel::findById($activation->user_id);
            if( \Activation::complete($user, $activation_code) )
            {
                /*
                | Ar fi frumos o pagina Thank You
                */
                return redirect($redirect_route)->withNotification([
                    'type' => 'success',
                    'message' => 'Your account was activated. Please log in!'
                ]);
            }
            throw new Exception('Something went wrong');
        }
        catch(Exception $e)
        {
            /*
            | Mesajul de eroare sa fie undeva frumos
            */
            return redirect($redirect_route)->withNotification([
                'type' => 'danger',
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
        }
    }
}