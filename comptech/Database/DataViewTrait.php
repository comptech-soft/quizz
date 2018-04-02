<?php

namespace Comptech\Database;

use Illuminate\Http\Request;

trait DataViewTrait
{

	public static function makeDataViewResponse(Request $request, $query = NULL)
	{
		if( is_null($query) )
		{
			$query = self::query();
		}
		if($request->filter)
		{
			foreach($request->filter as $i => $filter)
			{
				if($filter['value'])
				{
					switch($filter['operator'])
					{
						case 'like':
							$query->where($filter['field'], $filter['operator'], '%' . $filter['value'] . '%');
							break;
						case 'start':
							$query->where($filter['field'], 'like', $filter['value'] . '%');
							break;
						case '=':
						case '<>':
						case '>=':
							$query->where($filter['field'], $filter['operator'], $filter['value']);
							break;
					}
				}
			}
		}
		if($request->order)
		{
			foreach($request->order as $i => $order)
			{
				$query->orderBy($order['field'], $order['direction']);
			}
		}
		if($request->per_page)
		{
			return $query->paginate($request->per_page);
		}
		return $query->get();
	}
}