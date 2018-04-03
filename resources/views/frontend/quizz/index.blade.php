@extends('layouts.master')

@section('content')
    <div id="quizz-selector">
    	<vue-quizz-selector>
    	</vue-quizz-selector>
    </div>
@endsection

@section('header')
	<header id="head" class="secondary">
		<div class="container">
            <h1>Online Quizes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!</p>
        </div>
    </header>
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'js/frontend/quizz/index.js',
    ]])
@endsection