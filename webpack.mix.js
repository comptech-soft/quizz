let mix = require('laravel-mix');

let assetsJsPath = 'resources/assets/js/'
let publicJsPath = 'public/js/'

/**
| 
| javascript
|
*/
mix

	.js(assetsJsPath + 'boot/boot.js', publicJsPath + 'boot/boot.js')
	.js(assetsJsPath + 'frontend/app.js', publicJsPath + 'frontend/app.js')

;

/**
|
| Sass
|
*/
mix

	.sass('resources/assets/sass/frontend/app.scss', 'public/css/frontend/app.css')


;