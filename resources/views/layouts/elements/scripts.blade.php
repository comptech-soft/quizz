@foreach($scripts as $i => $file)
	{!! Html::script($file) !!}
@endforeach