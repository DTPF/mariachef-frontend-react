import * as RecipeTypes from './user.types'
import { message } from 'antd';
import { registerLoginUserAPI } from 'api/user.api';
import { Auth0User, User } from '../initialUserState';

export async function loginAction(dispatch: { (value: any): void; (arg0: { type: string; payload: { user: User; }; }): any; }, user: Auth0User, token: string) {
	try {
		const loginFetch = await registerLoginUserAPI(user, token)
		if (loginFetch.response.status === 200 || loginFetch.response.status === 201) {
			return dispatch({
				type: RecipeTypes.LOGIN,
				payload: {
					user: loginFetch.data.user
				}
			})
		} else {
			message.warning('Authentication failed')
		}
	} catch (err) {
		message.error('Server error')
	}
}