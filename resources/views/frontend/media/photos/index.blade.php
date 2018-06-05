@extends('layouts.master')

@section('content')
    
   	<div class="galleria">
   		@foreach($files as $i => $record)
   			<img 
   				src="/media/photos/{{$record->file_name}}"
   				data-title="{{ $record->title }}" 
   				data-description="{{ $record->body }}"
   			/>
   		@endforeach
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
    		background: #ccc; 
    	}
    </style>
@endsection

@section('scripts')
    @include('layouts.elements.scripts', ['scripts' => [
        'vendors/galleria/galleria-1.5.7.min.js',
    ]])
    <script>
		(function() { 
		    Galleria.loadTheme('/vendors/galleria/themes/classic/galleria.classic.min.js');
		    Galleria.run('.galleria', {
			    autoplay: 3000,
			});
		}());
	</script>
@endsection