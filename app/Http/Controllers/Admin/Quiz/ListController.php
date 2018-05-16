<?php

namespace App\Http\Controllers\Admin\Quiz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quizes\Quizes\Quiz;

class ListController extends Controller
{

	public function index()
	{
		return view('admin.quizes.list.index')->with(['app' => 'admin']);
	}

	public function populate(Request $request)
	{
		$q = Quiz::query();
		if($orderBy = $request->orderBy)
		{
			if( is_array($orderBy) )
			{
				foreach($orderBy as $i => $order)
				{
					$q->orderBy($order['field'], $order['direction']);
				}
			}
		}
		return $q->paginate($request->per_page);
	}

	public function delete(Request $request)
	{
		return Quiz::where('id', $request->id)->delete();
	}

	public function update(Request $request)
	{
		$record = Quiz::find($request->id)->update( $request->all() );
		return [
            'success'       => true, 
            'redirect'      => NULL,
            'record'        => Quiz::find($request->id),
            'notification'  => [
                'type' => 'success',
                'message' => 'The quiz was successfull updated.'
            ]
        ];
	}
	
}