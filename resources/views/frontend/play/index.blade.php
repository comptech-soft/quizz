@extends('layouts.master')

@section('content')
    <div id="play">
        <vue-play>
        </vue-play>
    </div>
@endsection

@section('styles')
	@include('layouts.elements.styles', ['styles' => [
        'vendors/icheck/all.css',
   	]])
@endsection

@section('scripts')
	@include('layouts.elements.scripts', ['scripts' => [
        'vendors/icheck/icheck.js',
        'js/frontend/play/index.js',
    ]])
@endsection