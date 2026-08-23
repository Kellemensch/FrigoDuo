import { CreateRecipeInput, Recipe } from "@/types/recipe";

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

export async function createRecipe(recipe: CreateRecipeInput): Promise<Recipe> {
	const response = await fetch(`${API_URL}/recipes`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(recipe),
	});

	if (!response.ok) {
		throw new Error("Impossible de créer la recette");
	}

	return response.json();
}
