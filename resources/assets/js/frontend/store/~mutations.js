const mutations = {

	setConfig(state)
	{

		state.ready = false;
		Requests.post('get-system-configuration', {})
			.then( r => {

				state.user = r.data.user ? r.data.user : null;
				state.config = r.data.config
				state.navbar = r.data.navbar
				
				state.ready = true;

			})

	},

	setCurrentNavbar(state, bar)
	{
		state.navbar.current = bar;
	}

}

export default mutations