"use client";

import { createIngredient } from "@/lib/api/ingredients";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

export default function IngredientNew() {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);

		try {
			await createIngredient({ name });

			setName("");
			router.refresh();
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

			<button
				type="submit"
				disabled={loading}
			>
				{loading ? "Création..."
					: "Créer l'ingrédient"
				}
			</button>

			{error && <p>{error}</p>}
		</form>
	)
}
