<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" data-app="{{ $app }}">
<head>
    @include('layouts.elements.head', ['title' => 'Quizes'])
    @include('layouts.elements.styles', ['styles' => [
        'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700',
        'css/bootstrap.min.css',
        'css/font-awesome.min.css',
        /*
        'css/bootstrap-theme.css',
        */
        'vendors/jquery-confirm/jquery-confirm.css',
        'css/style.css',
        'css/camera.css',
        'css/frontend/app.css',
    ]])
    @yield('styles')
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
    <script src="/js/respond.min.js"></script>
    <![endif]-->
</head>

<body class="{{ $app }}">
    @include('layouts.components.navbar')

    @yield('header')

    <div class="container">
        @yield('content')
    </div>
    
    @include('layouts.elements.scripts', ['scripts' => [
        'js/modernizr-latest.js',
        'js/jquery.min.js',
        'js/jquery-ui.min.js',
        'vendors/scrollto/scrollto.js',
        'vendors/jquery-confirm/jquery-confirm.js',
        'vendors/notify/notify.min.js',
        'js/fancybox/jquery.fancybox.pack.js',
        /* 'js/jquery.mobile.customized.min.js', */
        'js/jquery.easing.1.3.js',
        'js/camera.min.js',
        'js/bootstrap.min.js',
        'js/custom.js',
        'js/boot/boot.js',
        'js/frontend/app.js',
    ]])

    @yield('scripts')    
</body>
</html>