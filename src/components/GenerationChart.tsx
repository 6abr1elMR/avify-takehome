import React from 'react';
import { ResponsiveBar, BarDatum } from '@nivo/bar';
import { GenerationResponse } from '../interfaces/generation';
import './GenerationChart.css';

interface GenerationChartProps {
	generationData: GenerationResponse;
}

const GenerationChart: React.FC<GenerationChartProps> = ({
	generationData,
}) => {
	const { generationmix } = generationData.data;
	const data = generationmix.map(
		(item): BarDatum => ({
			fuel: item.fuel,
			value: item.perc,
		})
	);

	return (
		<div className='container'>
			<main className='main'>
				<div className='card'>
					<h2 className='title'>Composición de la Generación de Energía</h2>
					{!generationData && <p>Cargando datos...</p>}
					{generationData && (
						<div className='chart-wrapper'>
							<ResponsiveBar
								data={data}
								keys={['value']}
								indexBy='fuel'
								margin={{ top: 30, right: 50, bottom: 90, left: 70 }}
								padding={0.3}
								valueScale={{ type: 'linear' }}
								indexScale={{ type: 'band', round: true }}
								colors={{ scheme: 'tableau10' }}
								colorBy='indexValue'
								borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
								axisTop={null}
								axisRight={null}
								axisBottom={{
									tickSize: 5,
									tickPadding: 10,
									tickRotation: -90,
									legend: 'Tipo de Energía',
									legendPosition: 'middle',
									legendOffset: 80,
								}}
								axisLeft={{
									tickSize: 5,
									tickPadding: 5,
									tickRotation: 0,
									legend: 'Porcentaje',
									legendPosition: 'middle',
									legendOffset: -40,
								}}
								labelSkipWidth={12}
								labelSkipHeight={12}
								labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
								isInteractive={true}
								tooltip={({ value }) => (
									<div className='tooltip'>
										<strong className='tooltip-title'>Valor</strong>
										<p className='tooltip-value'>{value}%</p>
									</div>
								)}
							/>
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default GenerationChart;
