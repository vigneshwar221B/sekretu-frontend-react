import axios from 'axios'

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['Token'] = token
	} else {
		delete axios.defaults.headers.common['Token']
	}
}

export default setAuthToken
