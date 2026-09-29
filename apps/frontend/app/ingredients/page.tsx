import { IngredientCard } from "@/components/ingredients/ingredientCard";
import IngredientNew from "@/components/ingredients/ingredientNew";
import { getIngredients } from "@/lib/api/ingredients";

export default async function IngredientsPage() {
	const ingredients = await getIngredients();

	return (
		<main>
			<h1>Ingrédients</h1>

			<section>
				{ingredients.map((ingredient) => (
					<IngredientCard key={ingredient.id} ingredient={ingredient} />)
				)}
			</section>

			<section>
				<IngredientNew />
			</section>
		</main>
	);
}
