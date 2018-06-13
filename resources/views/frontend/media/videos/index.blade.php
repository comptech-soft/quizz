@extends('layouts.master')

@section('content')

   	<div class="galleria">
   		<div class="row">
            @foreach($files as $i => $record)
   			<div class="col-xs-12 col-sd-6 col-md-4">
                <video controls>
                    <source src="/media/videos/{{ $record->file_name }}" type="video/mp4">
                </video>
            </div>
   		    @endforeach
        </div>
    </div>

@endsection

@section('styles')
    @include('layouts.elements.styles', ['styles' => [
    ]])
    <style>
    	.galleria
    	{
    		margin-top: 40px;
    		max-width: 100%;
    		height: 540px;
    		background: #fff;
    	}
        video
        {
            width:100%;
        }
    </style>
@endsection
