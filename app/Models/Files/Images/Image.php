<?php

namespace App\Models\Files\Images;

use Illuminate\Database\Eloquent\Model;

/*
| Traits
*/
use Comptech\Database\DataViewTrait;
use App\Models\Files\Images\Traits\Datasource;

class Image extends Model
{

	use 
		DataViewTrait,
		Datasource
	;
	
	protected $table = 'images';
	protected $guarded = ['id'];

}