import React, { useState, useEffect } from 'react';
import GenerationChart from './components/GenerationChart';
import { getGenerationData } from './services/generationService';
import { GenerationResponse } from './interfaces/generation';

export const App = () => {
	const [generationData, setGenerationData] =
		useState<GenerationResponse | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getGenerationData();
				setGenerationData(data);
			} catch (err) {
				setError('Error al cargar los datos de generación');
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className='app'>
			<h1>Generación de Energía en el Reino Unido</h1>
			{generationData && <GenerationChart generationData={generationData} />}
		</div>
	);
};
