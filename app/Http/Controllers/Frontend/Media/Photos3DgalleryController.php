<?php

namespace App\Http\Controllers\Frontend\Media;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Files\Medias\Media;

class Photos3DgalleryController extends Controller
{

    public function index(Request $request)
    {
    	return view('frontend.media.photos.index')->with([
    		'app' => 'frontend',
    		'files' => Media::where('type', 'photo-3d')->get(),
    	]);
    }

}
