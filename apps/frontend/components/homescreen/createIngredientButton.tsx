"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateIngredientButton() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	return (
		<button
			type="button"
			onClick={() => { router.push("/ingredients/new"); setLoading(true); }}
			disabled={loading}
		>
			Créer un ingrédient
		</button>
	);
}
