<?php

namespace App\Models\Quizes\Solvings;

use Illuminate\Database\Eloquent\Model;

class Solving extends Model
{

	protected $table = 'quiz_solvings';
	protected $guarded = ['id'];

	protected $appends = [
		'total_real_points',
	];

	public function responses()
	{
		return $this->hasMany(\App\Models\Quizes\Responses\Response::class);
	}

	public function getTotalRealPointsAttribute()
	{
		return $this->responses->sum('points');
	}

}