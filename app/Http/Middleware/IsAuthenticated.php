<?php

namespace App\Http\Middleware;

use Closure;
use Sentinel;

class IsAuthenticated
{

    public function handle($request, Closure $next)
    {
        if( Sentinel::check() )
        {
        	// if( Sentinel::inRole('admin') )
         //    {
         //        return redirect(route('admin-welcome-index'));
         //    }
            return $next($request);
        } 
        return redirect('/');
    }

}