@extends('layouts.master')

@section('content')
    {{ $app }}. admn.welcome.index
    <hr/>
    {{ Sentinel::check() }}
    <hr/>
    @if(Sentinel::check())
    	{{ Sentinel::check()->roles }}
    @endif
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
@endsection