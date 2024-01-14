import * as RecipeTypes from './recipes.types'
import { message } from 'antd';
import { getRecipesApi } from 'api/recipes';
import { Recipe } from 'interfaces/recipe';

export async function initRecipesAction(dispatch: any, orderBy: string) {
	try {
		const response = await getRecipesApi(orderBy)
		if (response.status === 200 || response.status === 201) {
			return dispatch({
				type: RecipeTypes.INIT_RECIPES,
				payload: {
					recipes: response.result
				}
			})
		} else {
			message.warning('Authentication failed')
		}
	} catch (err) {
		message.error('Server error')
	}
}

export async function postRecipeAction(dispatch: any, recipe: Recipe) {
	return dispatch({
		type: RecipeTypes.POST_RECIPE,
		payload: { recipe }
	})
}