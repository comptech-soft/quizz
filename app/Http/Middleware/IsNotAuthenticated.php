<?php

namespace App\Http\Middleware;

use Closure;
use Sentinel;

class IsNotAuthenticated
{

    public function handle($request, Closure $next)
    {
        if( ! ($user = Sentinel::check()) )
        {
            return $next($request);
        }
        Sentinel::logout();
        return $next($request);
        
        // if( Sentinel::inRole('admin') )
        // {
        // 	return redirect( route('admin-welcome-index') );
        // }
        // // return redirect( route('frontend-welcome-index') );
        // dd($user);
        // return $next($request);
    }
}
