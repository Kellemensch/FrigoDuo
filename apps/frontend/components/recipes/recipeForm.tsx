"use client";

import { createRecipe } from "@/lib/api/recipes";
import { Ingredient } from "@/types/ingredient";
import { Unit } from "@/types/unit";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

type RecipeIngredientInput = {
	ingredientId: number | null;
	quantity: number;
	unitId: number | null;
}

type RecipeFormProps = {
	ingredients: Ingredient[];
	units: Unit[];
}

export default function RecipeForm({ ingredients, units }: RecipeFormProps) {
	const [name, setName] = useState("");
	const [recipeIngredients, setRecipeIngredients] = useState<RecipeIngredientInput[]>([]);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	function addIngredient() {
		setRecipeIngredients((current) => [
			...current,
			{
				ingredientId: null,
				quantity: 0,
				unitId: null
			},
		]);
	}

	function updateIngredient(index: number, data: Partial<RecipeIngredientInput>) {
		setRecipeIngredients((current) =>
			current.map((item, itemIndex) =>
				itemIndex === index
					? { ...item, ...data }
					: item,
			));
	}

	function removeIngredient(index: number) {
		setRecipeIngredients((current) =>
			current.filter((_, itemIndex) => itemIndex !== index))
	}

	async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);

		try {
			const recipe = await createRecipe({
				name,
				ingredients: recipeIngredients
			});

			setName("");
			setRecipeIngredients([]);

			router.push(`/recipes/${recipe.id}`);
		} catch (error) {
			setError(error instanceof Error ? error.message : "Une erreur est survenue");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Nom</label>

			<input id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<section>
				<h2>Ingrédients</h2>

				{recipeIngredients.map((recipeIngredient, index) => (
					<div key={index}>
						<select value={recipeIngredient.ingredientId ?? ""}
							onChange={(event) => updateIngredient(index, { ingredientId: Number(event.target.value) })}>
							<option value={""}>
								Choisir un ingrédient
							</option>

							{ingredients.map((ingredient) => (
								<option key={ingredient.id}
									value={ingredient.id}>
									{ingredient.name}
								</option>
							))}
						</select>
						<input
							type="number"
							min="0"
							step="any"
							value={recipeIngredient.quantity}
							onChange={(event) =>
								updateIngredient(index, {
									quantity: Number(event.target.value),
								})
							}
						/>

						<select
							value={recipeIngredient.unitId ?? ""}
							onChange={(event) =>
								updateIngredient(index, {
									unitId: Number(event.target.value),
								})
							}
						>
							<option value="">
								Sans unité
							</option>

							{units.map((unit) => (
								<option
									key={unit.id}
									value={unit.id}
								>
									{unit.name}
								</option>
							))}
						</select>

						<button
							type="button"
							onClick={() => removeIngredient(index)}
						>
							−
						</button>
					</div>
				))}

				<button
					type="button"
					onClick={addIngredient}
				>
					+ Ajouter un ingrédient
				</button>
			</section>

			<button
				type="submit"
				disabled={loading}
			>
				{loading
					? "Création..."
					: "Créer la recette"}
			</button>

			{error && <p>{error}</p>}
		</form>
	);
}
