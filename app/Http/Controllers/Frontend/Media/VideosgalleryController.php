<?php

namespace App\Http\Controllers\Frontend\Media;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VideosgalleryController extends Controller
{

    public function index(Request $request)
    {
    	return view('frontend.media.videos.index')->with(['app' => 'frontend']);
    }

}
