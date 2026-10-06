"use client";

import { Recipe } from "@/types/recipe";
import { useState } from "react";
import GetRandomRecipeButton from "./getRandomRecipeButton";
import { RecipeCard } from "../recipes/recipeCard";

export default function GetRandomRecipe() {
	const [recipe, setRecipe] = useState<Recipe>();

	return (
		<div>
			<GetRandomRecipeButton onRecipeReceived={(recipe) => setRecipe(recipe)} />

			{recipe && <RecipeCard recipe={recipe} />}
		</div>
	);
}
