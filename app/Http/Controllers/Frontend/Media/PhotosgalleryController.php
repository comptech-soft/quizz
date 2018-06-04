<?php

namespace App\Http\Controllers\Frontend\Media;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PhotosgalleryController extends Controller
{

    public function index(Request $request)
    {
    	return view('frontend.media.photos.index')->with(['app' => 'frontend']);
    }

}
