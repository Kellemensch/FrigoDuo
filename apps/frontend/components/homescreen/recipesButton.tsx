"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RecipesButton() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	return (
		<button
			type="button"
			disabled={loading}
			onClick={() => { router.push("/recipes"); setLoading(true); }}
		>
			Voir les recettes
		</button >
	)
};
