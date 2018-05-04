<?php

namespace App\Http\Middleware;

use Closure;
use Sentinel;

class IsAdmin
{

    public function handle($request, Closure $next)
    {
        if( Sentinel::check() )
        {
            if( Sentinel::inRole('admin') )
            {
                return $next($request);
            }
            return redirect( route('welcome-index') );
        }
        return redirect( route('admin-login') );
    }
    
}