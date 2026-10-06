"use client";

import { createIngredient } from "@/lib/api/ingredients";
import { CreateIngredientInput, Ingredient } from "@/types/ingredient";
import { useRouter } from "next/navigation";
import React, { SubmitEvent, useState } from "react";

interface IngredientFormProps {
	ingredients: Ingredient[];
};

export default function IngredientForm({ ingredients }: IngredientFormProps) {
	const [newIngredient, setNewIngredient] = useState<CreateIngredientInput>({ name: "" });
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);

		try {
			if (ingredients.some((i) => i.name === newIngredient.name.toLowerCase().trim())) {
				setError("Cet ingrédient exite déjà");
			} else {
				const ingredient = await createIngredient(newIngredient);
				setNewIngredient({ name: "" });
				window.alert("Ingrédient ajouté à la base de données");
				router.refresh();
			}
		} catch (error) {
			setError(error instanceof Error ? error.message : "Une erreur est survenue");
		} finally {
			setLoading(false);
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valeur = e.target.value;
		const textOnly = valeur.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
		setNewIngredient({ name: textOnly });
		setError(null);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Nom</label>
			<input id="name" value={newIngredient?.name} onChange={handleChange} required />
			<button
				type="submit"
				disabled={loading}
			>
				{loading ? "Création..." : "Créer l'ingrédient"}
			</button>

			{error && <p>{error}</p>}
		</form>
	);
}
