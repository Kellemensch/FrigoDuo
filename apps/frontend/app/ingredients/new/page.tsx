import IngredientForm from "@/components/ingredients/ingredientForm";
import { getIngredients } from "@/lib/api/ingredients";

export default async function NewIngredientPage() {
	const ingredients = await getIngredients();

	return (
		<div>
			<h1>Nouvel ingrédient</h1>
			<IngredientForm ingredients={ingredients} />
		</div>
	);
}
