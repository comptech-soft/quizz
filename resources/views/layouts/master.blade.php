<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" data-app="frontend">
<head>
    @include('layouts.elements.head', ['title' => 'Facility'])
    @include('layouts.elements.styles', ['styles' => [
        'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700',
        'css/bootstrap.min.css',
        'css/font-awesome.min.css',
        'css/bootstrap-theme.css',
        'css/style.css',
        'css/camera.css',
    ]])
    @yield('styles')
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
    <script src="/js/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    @include('layouts.components.navbar')

    <div class="container">
        @yield('content')
    </div>
    
    @include('layouts.elements.scripts', ['scripts' => [
        'js/modernizr-latest.js',
        'js/jquery.min.js',
        'js/fancybox/jquery.fancybox.pack.js',
        'js/jquery.mobile.customized.min.js',
        'js/camera.min.js',
        'js/bootstrap.min.js',
        'js/custom.js',
    ]])

    @yield('scripts')    
</body>
</html>
