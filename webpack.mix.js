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

	.js(assetsJsPath + 'frontend/visitors/welcome/index.js', publicJsPath + 'frontend/visitors/welcome/index.js')

	.js(assetsJsPath + 'frontend/quizz/index.js', publicJsPath + 'frontend/quizz/index.js')
	.js(assetsJsPath + 'frontend/quiz-detail/index.js', publicJsPath + 'frontend/quiz-detail/index.js')

	.js(assetsJsPath + 'frontend/play/index.js', publicJsPath + 'frontend/play/index.js')


	.js(assetsJsPath + 'admin/quizes/create/index.js', publicJsPath + 'admin/quizes/create/index.js')
	.js(assetsJsPath + 'admin/quizes/list/index.js', publicJsPath + 'admin/quizes/list/index.js')
;

/**
|
| Sass
|
*/
mix

	.sass('resources/assets/sass/frontend/app.scss', 'public/css/frontend/app.css')

;