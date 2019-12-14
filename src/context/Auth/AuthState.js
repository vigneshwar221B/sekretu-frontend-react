import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types'

const BASE_URL = 'http://localhost:8080'
const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		error: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token)

			dispatch({
				type: USER_LOADED,
			})
		}
	}

	// Register User
	const register = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		try {
			const res = await axios.post(`${BASE_URL}/register`, formData, config)
			console.log(res)

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			})

			loadUser()
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: 'failed',
			})
		}
	}

	// Login User
	const login = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		try {
			const res = await axios.post(`${BASE_URL}/login`, formData, config)

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})

			loadUser()
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: 'failed',
			})
		}
	}

	// Logout
	const logout = () => dispatch({ type: LOGOUT })

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
