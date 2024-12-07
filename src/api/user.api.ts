import { basePath } from "./utils/config";
// import { makeRequest } from "./utils/makeRequest";

export const registerLoginUserAPI = async (user: any, token: string): Promise<any> => {
	const params = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user: user
		}),
	}
	const response = await fetch(`${basePath}/login`, params)
	const data = await response.json()
	return { response, data }
}