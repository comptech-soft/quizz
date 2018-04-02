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
        dd(__METHOD__ . '::' . __CLASS__);
    }

}
