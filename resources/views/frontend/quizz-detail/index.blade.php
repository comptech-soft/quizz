@extends('layouts.master')

@section('content')
    <div id="quiz-detail">
        <vue-quiz-detail
            id="{{$quiz->id}}"
        >
        </vue-quiz-detail>
    </div>
@endsection

@section('header')
	<header id="head" class="secondary">
		<div class="container">
            <h1>Online Quiz</h1>
            <p>
                {{ $quiz->name }}
            </p>
        </div>
    </header>
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'js/frontend/quiz-detail/index.js',
    ]])
@endsection