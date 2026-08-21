import { RecipeIngredientRow } from "@/components/recipes/recipeIngredientRow";
import { getRecipe } from "@/lib/api/recipes";

type RecipeInfoPageProps = {
	params: Promise<{ id: string; }>;
}

export default async function RecipeInfoPage({ params }: RecipeInfoPageProps) {
	const { id } = await params;

	const recipe = await getRecipe(id);

	return (
		<main>
			<h1>{recipe.name}</h1>

			<p>ID: {recipe.id}</p>

			<section>
				<h2>Ingrédients</h2>
				<ul>
					{recipe.recipeIngredients.map((recipeIngredient) => (
						<RecipeIngredientRow key={recipeIngredient.ingredient.id} recipeIngredient={recipeIngredient} />
					))}
				</ul>
			</section>
		</main >
	);
}
