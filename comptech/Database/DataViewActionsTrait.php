<?php

namespace Comptech\Database;

use Illuminate\Http\Request;
use Comptech\Database\Exceptions\NotBeDeletedException;
use Comptech\Database\Exceptions\NotBeUpdatedException;
use Exception;

trait DataViewActionsTrait
{

    public static function insertRecord(Request $request)
    {
        return self::actionInsertRecord($request, self::$messages['insert']);
    }

	protected static function actionInsertRecord(Request $request, $messages)
	{
		try
		{
			$record = self::create(self::requestToData($request, 'insert'));
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
                    'message' =>  $messages['failed'],
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
		}
	}

    public static function updateRecord($id, Request $request)
    {
        $related = (! property_exists(__CLASS__, 'related') ? NULL : $related = self::$related);
        return self::actionUpdateRecord($id, $request, self::$messages['update'], $related);
    }

    protected static function actionUpdateRecord($id, Request $request, $messages, $related)
    {
        try
        {
            if( ! self::canBeUpdated($id, $request) )
            {
                throw new NotBeUpdatedException($messages['not-be-updated']);
            }
            $record = self::find($id)->update( self::requestToData($request, 'update') );
            return [
                'success'       => true, 
                'redirect'      => NULL,
                'record'        => is_null($related) ? self::find($id) : self::with($related)->find($id),
                'notification'  => [
                    'type' => 'success',
                    'message' => $messages['success'],
                ]
            ];
        }
        catch(NotBeUpdatedException $e)
        {
            return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
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
                    'message' =>  $messages['failed'],
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
        }
    }

    public static function deleteRecord($id, Request $request)
    {
        return self::actionDeleteRecord($id, $request, self::$messages['delete']);
    }
    
    protected static function actionDeleteRecord($id, Request $request, $messages)
    {
        try
        {
            if( ! self::canBeDeleted($id, $request) )
            {
                throw new NotBeDeletedException($messages['not-be-deleted']);
            }
            $record = self::find($id)->delete();
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
        catch(NotBeDeletedException $e)
        {
            return [
                'success'       => false, 
                'redirect'      => NULL,
                'notification'  => [
                    'type' => 'danger',
                    'message' =>  $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
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
                    'message' =>  $messages['failed'],
                    'exception' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]
            ];
        }
    }
	
}