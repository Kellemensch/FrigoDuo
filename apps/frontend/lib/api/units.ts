import { Unit } from "@/types/unit";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUnits(): Promise<Unit[]> {
	const response = await fetch(`${API_URL}/units`);

	if (!response.ok) {
		throw new Error("Impossible de récupérer les unités");
	}

	return response.json();
}
