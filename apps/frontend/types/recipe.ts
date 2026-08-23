import { Ingredient } from "./ingredient";
import { Unit } from "./unit";

export type RecipeIngredient = {
	quantity: number;
	ingredient: Ingredient;
	unit: Unit;
}

export type Recipe = {
	id: number;
	name: string;
	recipeIngredients: RecipeIngredient[];
}

export type RecipeIngredientInput = {
	ingredientId: number;
	quantity: number;
	unitId: number;
}

export type CreateRecipeInput = {
	name: string;
	ingredients: RecipeIngredientInput[];
}
