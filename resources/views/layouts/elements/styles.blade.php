@foreach($styles as $i => $file)
	{!! Html::style($file) !!}
@endforeach