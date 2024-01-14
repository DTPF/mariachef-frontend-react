const initialUserState: UserState = {
	user: {
		_id: "",
		userId: "",
		name: "",
		lastname: "",
		nickname: "",
		email: "",
		language: "",
		avatar: "",
		role: "",
		isVerified: true,
		createdAt: "",
		updatedAt: ""
	},
}

export interface UserState {
	user: User
}

export interface User {
	_id: string,
	userId: string,
	name: string,
	lastname: string,
	nickname: string,
	email: string,
	language: string,
	avatar: string,
	role: string,
	isVerified: boolean,
	createdAt: string,
	updatedAt: string
}

export interface Auth0User {
	given_name?: string,
	family_name?: string,
	nickname?: string,
	name?: string,
	picture?: string,
	locale?: string,
	updated_at?: string,
	email?: string,
	email_verified?: boolean,
	sub?: string
}

export default initialUserState