import { useReducer, useMemo, useEffect, useCallback, useState } from 'react'
import RecipesContext from './RecipesContext'
import initialRecipesState from './initialRecipesState'
import recipeReducer from 'context/recipes/reducer/recipes.reducer'
import * as action from "context/recipes/reducer/recipes.actions"
import { ChildrenProps } from 'interfaces/global'
import { Recipe } from 'interfaces/recipe'

export default function RecipesProvider(props: ChildrenProps) {
	const [recipesState, dispatch] = useReducer(recipeReducer, initialRecipesState)
	const [orderBy, setOrderBy] = useState('asc')

	useEffect(() => {
		const initGifs = async () => {
			action.initRecipesAction(dispatch, orderBy)
		}
		initGifs()
	}, [orderBy])

	const postRecipe = useCallback(async (recipe: Recipe) => {
		action.postRecipeAction(dispatch, recipe)
	}, [])

	const setOrderByAction = useCallback((orderBy: string) => {
		setOrderBy(orderBy)
	}, [])

	const memoProvider = useMemo(
		() => ({
			...recipesState,
			orderBy,
			postRecipe,
			setOrderByAction
		}), [
		recipesState,
		orderBy,
		postRecipe,
		setOrderByAction
	])

	return (
		<RecipesContext.Provider value={memoProvider}>
			{props.children}
		</RecipesContext.Provider>
	)
}