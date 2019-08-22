import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		
	},
	mutations: {
		set(state, data){
			Vue.set(state, data.key, data.value)
		},
		unset(state, key){
			Vue.set(state, key, null)
		},
		list(state, key){
			Vue.set(state, '__list', key)
		}
	},
	actions: {

	}
})