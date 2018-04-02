const actions = {

	setConfig: ({ commit }) => commit('setConfig'), 

	setCurrentNavbar: ({ commit }, bar) => commit('setCurrentNavbar', bar),

}

export default actions