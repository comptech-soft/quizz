import DateTime from './helpers/DateTime.js'
import Strings from './helpers/Strings.js'

class LoadPlugins 
{

	constructor()
	{
   		if(! LoadPlugins.instance)
   		{
     		LoadPlugins.instance = this;
   		}
   		return LoadPlugins.instance;
  	}

  	boot()
  	{
      window._ = require('lodash');
      window.$ = window.jQuery = require('jquery');
      require('bootstrap-sass');
      require('jquery.scrollto');

      // https://craftpip.github.io/jquery-confirm/
      require('jquery-confirm');
      // require('xzoom');

      window.Vue = require('vue');
      window.Vue.options.author = 'comptech-soft';

      window.Axios = require('axios');
      window.Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      window.Axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;

      window.Moment = require('moment');
      window.Autonumeric = require('AutoNumeric');
      
      Vue.prototype.DateTime = window.DateTime = DateTime;
      Vue.prototype.Strings = window.Strings = Strings;
        
  	}
}

const instance = new LoadPlugins();
instance.boot();
Object.freeze(instance);
export default instance;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
