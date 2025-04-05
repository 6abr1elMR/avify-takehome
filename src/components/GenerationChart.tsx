import React from 'react';
import { Bar, BarDatum } from '@nivo/bar';
import { GenerationResponse } from '../interfaces/generation';

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
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-2xl font-bold mb-6 text-center'>
				Composición de la Generación de Energía
			</h2>
			<div className='relative w-full aspect-[2/1]'>
				<Bar
					width={800}
					height={400}
					data={data}
					keys={['value']}
					indexBy='fuel'
					margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
					padding={0.3}
					valueScale={{ type: 'linear' }}
					indexScale={{ type: 'band', round: true }}
					colors={{ scheme: 'nivo' }}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: '#38bcb2',
							size: 4,
							padding: 1,
							stagger: true,
						},
					]}
					fill={[
						{
							match: {
								id: 'value',
							},
							id: 'dots',
						},
					]}
					borderColor={{
						from: 'color',
						modifiers: [['darker', 0.2]],
					}}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Tipo de Energía',
						legendPosition: 'middle',
						legendOffset: 32,
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
					tooltip={({ id, value }) => (
						<div className='bg-white p-2 rounded shadow'>
							<strong className='block'>{id}</strong>
							<p className='text-sm'>{value}%</p>
						</div>
					)}
				/>
			</div>
		</div>
	);
};

export default GenerationChart;
