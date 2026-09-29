import type { Ingredient } from "@/types/ingredient";
import Link from "next/link";

type IngredientCardProps = {
	ingredient: Ingredient;
};

export function IngredientCard({ ingredient }: IngredientCardProps) {
	return (
		<Link href={`ingredients/${ingredient.id}`}>
			<article>
				<h2>{ingredient.name}</h2>
			</article>
		</Link>
	);
}
