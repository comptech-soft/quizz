<?php

namespace App\Models\Auth\Preferences;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\Auth\Users\User;

class Preference extends Model
{

	protected $table = 'user_preferences';
	protected $guarded = ['id'];

	public static function updateUserPreferences(Request $request, User $user)
	{
		// $data = [
		// 	'user_id' => $user->id,
		// 	'preference' => $request->preference,
		// 	'value' => json_encode($request->value)
		// ];

		return self::updateOrCreate(
			['user_id' => $user->id, 'preference' => $request->preference],
    		['value' => json_encode($request->value)]
		);
	}

}