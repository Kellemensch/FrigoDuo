import { RecipeCard } from "@/components/recipes/recipeCard";
import { getRecipes } from "@/lib/api/recipes";

export default async function RecipesPage() {
	const recipes = await getRecipes();

	return (
		<main>
			<h1>Mes recettes</h1>

			<section>
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />)
				)}
			</section>
		</main >);
}
