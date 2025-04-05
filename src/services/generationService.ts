import { GenerationResponse } from '../interfaces/generation';

const API_URL = 'https://api.carbonintensity.org.uk/generation';

export const getGenerationData = async (): Promise<GenerationResponse> => {
	try {
		const response = await fetch(API_URL);
		if (!response.ok)
			throw new Error('Error al obtener los datos de generación');
		return response.json();
	} catch (error) {
		throw new Error('Error al obtener los datos de generación');
	}
};
