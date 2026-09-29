import { Ingredient, CreateIngredientInput } from "@/types/ingredient";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getIngredients(): Promise<Ingredient[]> {
	const response = await fetch(`${API_URL}/ingredients`);

	if (!response.ok) {
		throw new Error("Impossible de récupérer les ingrédients");
	}

	return response.json();
}

export async function getIngredient(id: string): Promise<Ingredient> {
	const response = await fetch(`${API_URL}/ingredients/${id}`);

	if (!response.ok) {
		throw new Error(`Impossible de récupérer l'ingrédient ${id}`);
	}

	return response.json();
}

export async function createIngredient(ingredient: CreateIngredientInput): Promise<Ingredient> {
	const response = await fetch(`${API_URL}/ingredients`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(ingredient),
	});

	if (!response.ok) {
		throw new Error("Impossible de créer l'ingrédient");
	}

	return response.json();
}
