<?php

namespace App\Http\Controllers\Utilities;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class ValidationController extends Controller
{

	/*
	| Asyncron vee-validate a value 
	*/
    public function veeValidate(Request $request)
    {
    	$data = [$request->field => $request->value];
    	$rule = $request->rule;
    	switch($rule)
    	{
    		case 'unique': 
    		{
    			$rule .= (':' . $request->table . ',' . $request->field . ($request->id ? ',' . $request->id : '') );
    			break;
    		}
    	}
    	$rules = [$request->field => $rule];
    	$validator = Validator::make($data, $rules);
    	return response()->json(['valid' => $validator->passes(), 'rule' => $rule]);
    }
}
