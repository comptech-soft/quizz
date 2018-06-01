@extends('layouts.master')

@section('content')
    <header id="head">

        <vue-welcome>
        </vue-welcome>



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