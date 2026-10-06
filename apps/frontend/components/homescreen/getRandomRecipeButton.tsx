"use client";

import { getRandomRecipe } from "@/lib/api/recipes";
import { Recipe } from "@/types/recipe";
import { useState } from "react";

interface GetRandomRecipeButtonProps {
	onRecipeReceived: (recipe: Recipe) => void;
}

export default function GetRandomRecipeButton({ onRecipeReceived }: GetRandomRecipeButtonProps) {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		try {
			const recipe = await getRandomRecipe();
			onRecipeReceived(recipe);
		} catch (error) {
			console.error("Erreur lors de la récupération d'une recette aléatoire: ", error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			disabled={loading}
		>
			{loading ? "Chargement..." : "Recette aléatoire"}
		</button>
	);
}
