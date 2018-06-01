import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

import en from './../../locales/en.js';
import de from './../../locales/de.js';
import ro from './../../locales/ro.js';

import state from './~state.js'
import getters from './~getters.js'
import mutations from './~mutations.js'
import actions from './~actions.js'

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
})

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', en);
Vue.i18n.add('de', de);
Vue.i18n.add('ro', ro);

let i = setInterval( () => {
	if( store.getters.config != null )
	{
		clearInterval(i);
		Vue.i18n.set(store.getters.config.locale);
		store.state.ready = true;
	}
}, 10);

export default store