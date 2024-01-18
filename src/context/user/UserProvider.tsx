import { useReducer, useMemo, useEffect, memo, useCallback } from 'react'
import UserContext from './UserContext'
import initialUserState from './initialUserState'
import userReducer from 'context/user/reducer/user.reducer'
import * as action from "context/user/reducer/user.actions"
import { ChildrenProps } from 'interfaces/global'
import { useAuth0 } from '@auth0/auth0-react'
import { lastLoginLS } from './constants'

function UserProvider(props: ChildrenProps) {
	const [userState, dispatch] = useReducer(userReducer, initialUserState)
	const { isAuthenticated, user, getAccessTokenSilently, isLoading, loginWithRedirect, logout: logoutAuth0 } = useAuth0()

	useEffect(() => {
		(async () => {
			if (isLoading) return
			if (!isAuthenticated) {
				const lastLogin = localStorage.getItem(lastLoginLS)
				if (lastLogin) {
					loginWithRedirect()
				}
				return
			}
			const token = await getAccessTokenSilently()
			if (token && user) {
				// console.log(token);
				action.loginAction(dispatch, user, token)
			}
		})()
	}, [isAuthenticated, user, isLoading, getAccessTokenSilently, loginWithRedirect])

	const logout = useCallback(() => {
		localStorage.removeItem(lastLoginLS)
		logoutAuth0()
	}, [logoutAuth0])

	const memoProvider = useMemo(
		() => ({
			...userState,
			logout
		}), [
		userState,
		logout
	])

	return (
		<UserContext.Provider value={memoProvider}>
			{props.children}
		</UserContext.Provider>
	)
}

export default memo(UserProvider)