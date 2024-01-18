import * as UserTypes from './user.types'
import { User, UserState } from '../initialUserState';

export default function userReducer(
	state: UserState,
	action: {
		type: string;
		payload: {
			user: User
		};
	}) {
	const { type, payload } = action;

	switch (type) {
		case UserTypes.LOGIN:
			return {
				...state,
				user: payload.user,
			}

		default:
			return state
	}
}