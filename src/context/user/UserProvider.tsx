import { useReducer, useMemo, useEffect, memo } from 'react'
import UserContext from './UserContext'
import initialUserState from './initialUserState'
import userReducer from 'context/user/reducer/user.reducer'
import * as action from "context/user/reducer/user.actions"
import { ChildrenProps } from 'interfaces/global'
import { useAuth0 } from '@auth0/auth0-react'

function UserProvider(props: ChildrenProps) {
	const [userState, dispatch] = useReducer(userReducer, initialUserState)
	const { isAuthenticated, user, getAccessTokenSilently, isLoading } = useAuth0()

	useEffect(() => {
		(async () => {
			if (isLoading || !isAuthenticated) return
			const token = await getAccessTokenSilently()
			if (token && user) {
				action.loginAction(dispatch, user, token)
			}
		})()
	}, [isAuthenticated, user, isLoading])

	const memoProvider = useMemo(
		() => ({
			...userState,
		}), [
		userState,
	])

	return (
		<UserContext.Provider value={memoProvider}>
			{props.children}
		</UserContext.Provider>
	)
}

export default memo(UserProvider)