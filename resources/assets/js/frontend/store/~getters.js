const getters = {

	/*
	| Entire current user record and his roles
	*/
	user: state => state.user,
	// roles: state => state.roles,

	// /*
	// | The user first role
	// */
	// role: state => {
	// 	if( ! state.user )
	// 	{
	// 		return '';
	// 	}
	// 	if( state.user.hasOwnProperty('roles') )
	// 	{
	// 		if( state.user.roles.length )
	// 		{
	// 			return state.user.roles[0];
	// 		}
	// 	}
	// 	return '';
	// },

	// paths: state => state.paths,

	// content: state => state.content,

	// ready: state => state.ready,

	
}

export default getters