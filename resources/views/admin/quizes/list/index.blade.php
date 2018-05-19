@extends('layouts.master')

@section('content')
    <div id="quiz-list">
        <vue-quiz-list>
        </vue-quiz-list>
    </div>
@endsection

@section('header')
	<header id="head" class="secondary admin">
        <div class="container">
            <h1>Quizes list (<span id="quizes-count"></span>)</h1>
        </div>
    </header>
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'vendors/icheck/icheck.js',
        'vendors/summernote/summernote.js',
        'js/admin/quizes/list/index.js',
    ]])
@endsection

@section('styles')
    @include('layouts.elements.styles', ['styles' => [
        'vendors/summernote/summernote.css',
        'vendors/icheck/all.css',
    ]])
@endsection