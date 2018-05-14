@extends('layouts.master')

@section('content')
    <div id="quiz-create">
        <vue-quiz-create
            action="insert"
        >
        </vue-quiz-create>
    </div>
@endsection

@section('header')
	<header id="head" class="secondary admin">
		<div class="container">
            <h1>Create a new quiz</h1>
        </div>
    </header>
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'vendors/icheck/icheck.js',
        'vendors/summernote/summernote.js',
        'js/admin/quizes/create/index.js',
    ]])
@endsection

@section('styles')
    @include('layouts.elements.styles', ['styles' => [
        'vendors/summernote/summernote.css',
        'vendors/icheck/all.css',
    ]])
@endsection