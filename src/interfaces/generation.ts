import { BarDatum } from '@nivo/bar';

export interface Generation extends BarDatum {
	fuel: string;
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
