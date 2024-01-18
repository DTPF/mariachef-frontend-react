import * as RecipeTypes from './user.types'
import { registerLoginUserAPI } from 'api/user.api';
import { Auth0User, User } from 'context/user/initialUserState';
import { lastLoginLS } from 'context/user/constants';
import { messageError, messageWarning } from 'views/components/UI/messages';

type LoginType = {
	dispatch: {
		(value: any): void;
		(arg0: {
			type: string;
			payload: {
				user: User;
			};
		}): any;
	}
	user: Auth0User
	token: string
}
export async function loginAction({ dispatch, user, token }: LoginType) {
	try {
		const loginFetch = await registerLoginUserAPI(user, token)
		if (loginFetch.response.status === 200 || loginFetch.response.status === 201) {
			localStorage.setItem(lastLoginLS, Date.now().toString())
			return dispatch({
				type: RecipeTypes.LOGIN,
				payload: {
					user: loginFetch.data.user
				}
			})
		} else {
			messageWarning({ msg: 'Authentication failed' })
		}
	} catch (err) {
		messageError({ msg: 'Server error' })
	}
}