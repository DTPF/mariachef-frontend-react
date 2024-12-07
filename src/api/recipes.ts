import { basePath } from "./utils/config";
import { makeRequest } from "./utils/makeRequest";

export function getRecipesApi(orderBy: string) {
  const url = `${basePath}/get-recipes/${orderBy}`;
  return makeRequest(url);
}

export function getRecipeImageApi(recipeImage: string) {
  const url = `${basePath}/get-recipe-image/${recipeImage}`;
  return makeRequest(url, null, false);
}