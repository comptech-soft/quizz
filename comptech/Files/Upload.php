<?php

namespace Comptech\Files;

use Illuminate\Http\Request;
use Storage;
use Exception;
use InterventionImage;

use App\Models\Files\Images\Image;

class Upload
{

	public static function uploadImageToAWSS3(Request $request)
	{
		try
        {
            $image = InterventionImage::make($request->file);
            $original_file_name = $request->file->getClientOriginalName();
            Storage::disk('s3')->put($request->folder . '/' . $original_file_name, file_get_contents($request->file), 'public');
            return [
                'success' => true,
                'image' => Image::create([
                    'original_name' => $original_file_name,
                    'original_extension' => $request->file->extension(),
                    'file_size' => $request->file->getClientSize(),
                    'width' => $image->width(),
                    'height' => $image->height(),
                    's3_path' => Storage::disk('s3')->url($request->folder . '/' . $original_file_name)
                ]),
                'notification'  => [
                    'type' => 'success',
                    'message' => 'Successfull uploaded ' . $original_file_name,
                ] 
            ];
        }
        catch(Exception $e)
        {
            return [
                'success'       => false, 
                'redirect'      => null,
                'notification'  => [
                    'type' => 'danger',
                    'message' => 'Error while uploading the file',
                    'exception' => $e->getMessage(),
                ]
            ];
        }
	}

    public static function getImageSizes($url)
    {
        $sizes = @getimagesize($url);
        if($sizes === FALSE)
        {
            $success = FALSE;
            $width = 0;
            $height = 0;
        }
        else
        {
            $success = TRUE;
            $width = $sizes[0];
            $height = $sizes[1];
        }
        return [
            'success' => $success,
            'url' => $url,
            'width' => $width,
            'height' => $height
        ];
    }

}