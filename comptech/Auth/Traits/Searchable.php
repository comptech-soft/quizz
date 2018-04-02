<?php

namespace Comptech\Auth\Traits;

trait Searchable
{

    public static function findByHash($hashed_id)
	{
		return self::whereRaw("MD5(id) = '" . $hashed_id. "'")->first();
	}

}
