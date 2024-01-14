import * as RecipesTypes from './recipes.types'

export default function recipesReducer(state: any, action: any) {
	const { type, payload } = action;

	switch (type) {
		case RecipesTypes.INIT_RECIPES:
			return {
				...state,
				recipes: payload.recipes,
			}

		case RecipesTypes.POST_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, payload.recipe],
			}

		default:
			return state
	}
}