<?php

namespace App\Models\Quizes\Quizes;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Http\Request;
// use Exception;

class Quiz extends Model
{

	
	protected $table = 'quizes';
	protected $guarded = ['id'];

	protected $appends = [
		'total_available_points',
	];

	public function questions()
	{
		return $this->hasMany(\App\Models\Quizes\Questions\Question::class, 'quiz_id')->orderBy('order_no');
	}

	public function getTotalAvailablePointsAttribute()
	{
		return $this->questions->sum('points');
	}
}