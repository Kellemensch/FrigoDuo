import { Ingredient } from "./ingredient";

export type Unit = {
	id: number;
	name: string;
	symbol: string;
}

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
