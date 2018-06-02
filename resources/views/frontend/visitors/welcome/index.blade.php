@extends('layouts.master')

@section('content')
    
        <div class="row">
                
            <div class="col-xs-12 col-sm-8">
                <header id="head">
                    <vue-welcome>
                    </vue-welcome>
                </header>
            </div>
            
            <div class="col-xs-12 col-sm-4">
                <div id="ranking">
                    ???
                </div>
            </div>
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
        'js/frontend/visitors/welcome/index.js',
    ]])
@endsection