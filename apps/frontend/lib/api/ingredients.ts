import { Ingredient } from "@/types/ingredient";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getIngredients(): Promise<Ingredient[]> {
	const response = await fetch(`${API_URL}/ingredients`);

	if (!response.ok) {
		throw new Error("Impossible de récupérer les ingrédients");
	}

	return response.json();
}
