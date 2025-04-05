export interface Generation {
	fuel: String;
	perc: number;
}

export interface GenerationData {
	from: string;
	to: string;
	generationmix: Generation[];
}

export interface GenerationResponse {
	data: GenerationData;
}
