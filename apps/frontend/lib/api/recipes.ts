import { Recipe } from "@/types/recipe";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getRecipes(): Promise<Recipe[]> {
	const response = await fetch(`${API_URL}/recipes`);

	if (!response.ok) {
		throw new Error("Impossible de récupérer les recettes");
	}

	return response.json();
}

export async function getRecipe(id: string): Promise<Recipe> {
	const response = await fetch(`${API_URL}/recipes/${id}`);

	if (!response.ok) {
		throw new Error("Impossible de récupérer la recette");
	}

	return response.json();
}
