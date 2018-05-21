@extends('layouts.master')

@section('content')
    <header id="head">
        <div class="container">
            <div class="heading-text">
                <h1 class="animated flipInY delay1 start-quiz">
                    Start Online Education
                </h1>
                <p class="start-quiz">
                    Free Online education template for elearning and online education institute.
                </p>
            </div>

            <div class="fluid_container">
                <div class="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                    <div data-thumb="images/slides/thumbs/img1.jpg" data-src="images/slides/img1.jpg">
                        <h2>
                            We develop.
                        </h2>
                    </div> 

                    <div data-thumb="images/slides/thumbs/img2.jpg" data-src="images/slides/img2.jpg">
                    </div>

                    <div data-thumb="images/slides/thumbs/img3.jpg" data-src="images/slides/img3.jpg">
                    </div>
                </div>
            </div>        
        </div>
    </header>
@endsection

@section('styles')
	@include('layouts.elements.styles', ['styles' => [
        'vendors/icheck/all.css',
   	]])
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'vendors/icheck/icheck.js',
    ]])
    <script>
        $(function(){
            $('#camera_wrap_4').camera({
                transPeriod: 500,
                time: 3000,
                height: '600',
                loader: 'false',
                pagination: true,
                thumbnails: false,
                hover: false,
                playPause: false,
                navigation: false,
                opacityOnGrid: false,
                imagePath: 'images/'
            });
            $('.start-quiz').click(function(e){
                location.href = '/play-quiz'
            })
        });
    </script>
@endsection