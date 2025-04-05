import React from 'react';
import { GenerationResponse } from '../interfaces/generation';

interface GenerationChartProps {
	generationData: GenerationResponse;
}

const GenerationChart: React.FC<GenerationChartProps> = ({
	generationData,
}) => {
	const { generationmix } = generationData.data;

	return (
		<div className='generation-chart'>
			<h2>Composición de la Generación de Energía</h2>
			<div className='chart-container'>
				{generationmix.map((item, index) => (
					<div key={`${item.fuel}-${index}`} className='chart-item'>
						<div className='fuel-name'>{item.fuel}</div>
						<div
							className='percentage-bar'
							style={{ width: `${item.perc}%`, backgroundColor: '#4CAF50' }}
						>
							{item.perc}%
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GenerationChart;
