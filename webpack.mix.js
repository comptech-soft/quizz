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
	.js(assetsJsPath + 'frontend/quizz/index.js', publicJsPath + 'frontend/quizz/index.js')
	.js(assetsJsPath + 'frontend/quiz-detail/index.js', publicJsPath + 'frontend/quiz-detail/index.js')

;

/**
|
| Sass
|
*/
mix

	.sass('resources/assets/sass/frontend/app.scss', 'public/css/frontend/app.css')

;