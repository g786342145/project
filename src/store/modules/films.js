import axios from 'axios'

const films = {
	namespaced: true,
	state: {
		moverB: '',
		moverC: '',
	},
	mutations: {
		setMoverB(state,data){
			state.moverB = data
			console.log(state.moverB)
		},
		setMoverC(state,data){
			state.moverC = data
			console.log(state.moverC)
		}
	},
	actions: {
		getMoverB(store){
			const http = axios.create({
				baseURL: '',
				timeout: 5000,
				headers: {
					
				}
			})
			http.request({
				url: 'http://192.168.0.102:9090/ajax/mostExpected?ci=59&limit=10&offset=0&token=&optimus_uuid=D4B2FB705FCF11EAAC33CF0809A367D39DBFFCBAA710485E81FE83EA69BC2BC0&optimus_risk_level=71&optimus_code=10',
				headers: {
					'Accept': 'application/json, text/javascript,*/*; q=0.01',
				}
			}).then(res => {
				// console.log(res)
				// console.log(store)
				store.commit('setMoverB',res.data.coming)
			})
		},
		getMoverC(store){
			const http = axios.create({
				baseURL: '',
				timeout: 5000,
				headers: {
					
				}
			})
			http.request({
				url: 'http://192.168.0.102:9090/ajax/comingList?ci=59&token=&limit=10&optimus_uuid=D4B2FB705FCF11EAAC33CF0809A367D39DBFFCBAA710485E81FE83EA69BC2BC0&optimus_risk_level=71&optimus_code=10',
				headers: {
					'Accept': 'application/json, text/javascript,*/*; q=0.01',
				}
			}).then(res => {
				// console.log(res)
				store.commit('setMoverC',res.data.coming)
			})
		}
	}
}

export default films








// 'http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=73F0F6005FCC11EA81EEBF3A83257D507C1A810FA55A4B48BCF8B88010CD37C1&optimus_risk_level=71&optimus_code=10'
// 'http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=73F0F6005FCC11EA81EEBF3A83257D507C1A810FA55A4B48BCF8B88010CD37C1&optimus_risk_level=71&optimus_code=10'
// 'http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=73F0F6005FCC11EA81EEBF3A83257D507C1A810FA55A4B48BCF8B88010CD37C1&optimus_risk_level=71&optimus_code=10'


// `Accept: application/json, text/javascript, */*; q=0.01
// Referer: http://m.maoyan.com/
// User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
// X-Requested-With: XMLHttpRequest`

// `Accept: application/json, text/javascript, */*; q=0.01
// Referer: http://m.maoyan.com/
// User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
// X-Requested-With: XMLHttpRequest`