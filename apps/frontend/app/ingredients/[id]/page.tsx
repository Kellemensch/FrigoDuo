import { getIngredient } from "@/lib/api/ingredients";

type IngredientInfoPageProps = {
	params: Promise<{ id: string; }>;
}

export default async function IngredientInfoPage({ params }: IngredientInfoPageProps) {
	const { id } = await params;

	const ingredient = await getIngredient(id);

	return (
		<main>
			<h1>{ingredient.name}</h1>

			<p>ID: {ingredient.id}</p>
		</main >
	);
}
