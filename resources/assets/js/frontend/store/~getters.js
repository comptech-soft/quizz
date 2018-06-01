const getters = {

	/*
	| Entire current user record and his roles
	*/
	user: state => state.user,

	config: state => state.config,

	navbar: state => state.navbar,

	ready: state => state.ready,

	locale: state => {
		if(state.config == null)
		{
			return 'en';
		}
		return state.config.locale;
	},

	timezone: state => {
		if(state.config == null)
		{
			return 'UTC';
		}
		return state.config.timezone;
	}
}

export default getters