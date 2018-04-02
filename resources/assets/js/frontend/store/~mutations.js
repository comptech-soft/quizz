const mutations = {

	setConfig(state)
	{

		// console.log('get-config');
		state.ready = false;
		Requests.post('get-system-configuration', {})
			.then( r => {

				// console.log(r.data);
				state.user = r.data.user;

				// if(r.data.sidebar.length > 0)
				// {
				// 	state.sidebar = r.data.sidebar;
				// 	state.content.component = r.data.sidebar.current.component
				// }

				// state.paths = r.data.paths;
				// state.roles = r.data.roles;
				// state.app   = r.data.app;

				// state.content.top_bar_menu = r.data.top_bar_menu;
				// state.content.header = r.data.header;

				// state.content.menu = r.data.menu;
				
				state.ready = true;

			})

	},

}

export default mutations