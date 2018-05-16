<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Comptech\Files\Upload;

class UploadController extends Controller
{

    /*
    | Upload an image to AWS S3
    */
    public function uploadImage(Request $request)
    {
        return Upload::uploadImageToAWSS3($request);
    }

}
