import type { RecipeIngredient } from "@/types/recipe";

type RecipeIngredientRowProps = {
	recipeIngredient: RecipeIngredient;
};

export function RecipeIngredientRow({ recipeIngredient }: RecipeIngredientRowProps) {
	return (
		<li>
			{recipeIngredient.quantity}{" "}
			{recipeIngredient.unit.symbol}{" "}
			{recipeIngredient.ingredient.name}
		</li>
	);
}
