<?php

namespace Comptech\Database;

use DB;

class Helper
{

	public static function reorder($table, $column, $records, $where = NULL)
	{
		if( ! $where )
		{
			DB::table($table)->update([$column => NULL]);
		}
		else
		{
			DB::table($table)->whereRaw($where)->update([$column => NULL]);	
		}
		foreach($records as $i => $record)
		{
			$records[$i]['order_no'] = ($i+1);
			DB::table($table)->where('id', $record['id'])->update([$column => $i + 1]);
		}	
        return $records;
	}

	/*
	| Genereaza options item pentru un select
	| table ............ : din ce tabela
	| label_field ...... : care coloana
	| order ............ : clauze de ordonare
	| filter ........... : clauze de filtrare
	*/
	public static function getVueSelectItems($table, $label_field, $id_field = NULL, $order = [], $filter = [])
	{
		$result = DB::table($table);
		foreach($order as $field => $direction)
		{
			$result->orderBy($field, $direction);
		}
		foreach($filter as $field => $search)
		{
			$result->where($field, $search['operator'], $search['value']);
		}
		return $result->select([$table . '.' . $label_field . ' as label', $table . '.' . ($id_field ? $id_field : 'id') . ' as id' ])->get();
	}

	public static function updateField($table, $where, $record, $messages = NULL)
	{
		if( is_null($messages ) )
		{
			$messages['success'] = $table . ' updated successfuly!';
			$messages['fail'] = 'Something went wrong';				
		}
		try
        {
            $record = DB::table($table)->where($where)->update( $record );
            return [
                'success'       => true, 
                'redirect'      => NULL,
                'record'        => $record,
                'notification'  => [
                    'type' => 'success',
                    'message' => $messages['success'],
                ]
            ];
        }
        catch(Exception $e)
        {
            return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' => $messages['fail'],
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
        }
	}

}