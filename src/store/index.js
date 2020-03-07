import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import film from './modules/films.js'

const store = new Vuex.Store({
	modules: {
		film
	}
})

export default store