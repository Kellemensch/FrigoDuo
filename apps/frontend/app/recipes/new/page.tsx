import RecipeForm from "@/components/recipes/recipeForm";
import { getIngredients } from "@/lib/api/ingredients";
import { getUnits } from "@/lib/api/units";

export default async function NewRecipePage() {
	const [ingredients, units] = await Promise.all([
		getIngredients(),
		getUnits(),
	]);

	return (
		<main>
			<h1>Nouvelle recette</h1>
			<RecipeForm ingredients={ingredients} units={units} />
		</main>
	);
}
