@extends('layouts.master')

@section('content')
    <header id="head">

        <vue-welcome>
        </vue-welcome>

        <div class="container">
            <div class="heading-text">
                <h1 class="animated flipInY delay1 start-quiz">
                    <b>Mars Quiz</b>
                </h1>
                <p class="start-quiz">
                    <b>Teste Dein Wissen über den Mars, und gewinne einer der 3 Preise !</b>                    
                    <p>1. Preis: Ein Amazon Gutschein in Wert von 25 Euro</p>
                    <p>2. Preis: Ein Amazon Gutschein in Wert von 20 Euro</p>
                    <p>3. Preis: Ein Amazon Gutschein in Wert von 15 Euro</p>
                </p>
            </div>

            <div class="fluid_container">
                <div class="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                    <div data-thumb="images/slides/thumbs/img1.jpg" data-src="images/slides/mars01.jpg"></div> 
                    <div data-thumb="images/slides/thumbs/img2.jpg" data-src="images/slides/mars02.jpg"></div>
                    <div data-thumb="images/slides/thumbs/img3.jpg" data-src="images/slides/mars03.jpg"></div>
                    <div data-thumb="images/slides/thumbs/img4.jpg" data-src="images/slides/mars04.jpg"></div>                    
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
        'js/frontend/visitors/welcome/index.js',
    ]])
@endsection