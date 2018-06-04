@extends('layouts.master')

@section('content')
    
    Videos
    
@endsection

@section('styles')
    @include('layouts.elements.styles', ['styles' => [
    ]])
@endsection

@section('scripts')
    @include('layouts.elements.scripts', ['scripts' => [
        'js/frontend/media/videos/index.js',
    ]])
@endsection
