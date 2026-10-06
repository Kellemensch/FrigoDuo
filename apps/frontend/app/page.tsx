import CreateRecipeButton from "@/components/homescreen/createRecipeButton";
import GetRandomRecipe from "@/components/homescreen/getRandomRecipe";
import RecipesButton from "@/components/homescreen/recipesButton";

export default function Home() {

	return (
		<main>
			<h1>
				FrigoDuo - Gestion du frigo et meal planner
			</h1>

			<RecipesButton />
			<CreateRecipeButton />
			<GetRandomRecipe />
		</main>
	);
}
