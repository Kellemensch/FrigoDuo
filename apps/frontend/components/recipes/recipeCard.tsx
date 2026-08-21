import type { Recipe } from "@/types/recipe";
import Link from "next/link";

type RecipeCardProps = {
	recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
	return (
		<Link href={`recipes/${recipe.id}`}>
			<article>
				<h2>{recipe.name}</h2>
			</article>
		</Link>
	);
}
