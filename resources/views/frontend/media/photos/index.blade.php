@extends('layouts.master')

@section('content')
    
    Photos
    
@endsection

@section('styles')
    @include('layouts.elements.styles', ['styles' => [
    ]])
@endsection

@section('scripts')
    @include('layouts.elements.scripts', ['scripts' => [
        'js/frontend/media/photos/index.js',
    ]])
@endsection
