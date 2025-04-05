import { getGenerationData } from '../../src/services/generationService';

const mockResponse = {
	data: {
		from: '2025-04-03T10:00Z',
		to: '2025-04-03T10:30Z',
		generationmix: [
			{ fuel: 'wind', perc: 35.2 },
			{ fuel: 'solar', perc: 10.1 },
			{ fuel: 'gas', perc: 25.6 },
		],
	},
};

describe('getGenerationData', () => {
	beforeEach(() => {
		global.fetch = jest.fn();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('debe retornar los datos correctamente cuando la respuesta es exitosa', async () => {
		(fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: jest.fn().mockResolvedValue(mockResponse),
		});

		const data = await getGenerationData();
		expect(data).toEqual(mockResponse);
	});

	it('debe lanzar error si la respuesta no es OK', async () => {
		(fetch as jest.Mock).mockResolvedValue({ ok: false });

		await expect(getGenerationData()).rejects.toThrow(
			'Error al obtener los datos de generación'
		);
	});

	it('debe lanzar error si fetch lanza una excepción', async () => {
		(fetch as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

		await expect(getGenerationData()).rejects.toThrow(
			'Error al obtener los datos de generación'
		);
	});
});
