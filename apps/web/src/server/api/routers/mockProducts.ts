// src/server/api/routers/mockProducts.ts

// TODO: Replace this mocked data with real data fetched from the blockchain in the near future.

export const mockedProducts = [
	{
		id: 1,
		name: "Café de Especialidad 1",
		price: 15.99,
		region: "Alajuela",
		farmName: "Beneficio Las Peñas",
		strength: "Light",
		process: "Honey",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 1.",
			imageUrl: "/images/cafe1.webp",
			imageAlt: "Paquete de Café de Especialidad 1",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 2,
		name: "Café de Especialidad 2",
		price: 17.99,
		region: "Cartago",
		farmName: "Beneficio Las Nubes",
		strength: "Medium",
		process: "Washed",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 2.",
			imageUrl: "/images/cafe2.webp",
			imageAlt: "Paquete de Café de Especialidad 2",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 3,
		name: "Café de Especialidad 3",
		price: 19.99,
		region: "Heredia",
		farmName: "Beneficio Monteverde",
		strength: "Strong",
		process: "Natural",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 3.",
			imageUrl: "/images/cafe3.webp",
			imageAlt: "Paquete de Café de Especialidad 3",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 4,
		name: "Café de Especialidad 4",
		price: 16.99,
		region: "Guanacaste",
		farmName: "Finca Santa Rosa",
		strength: "Light",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 4.",
			imageUrl: "/images/cafe4.webp",
			imageAlt: "Paquete de Café de Especialidad 4",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 5,
		name: "Café de Especialidad 5",
		price: 18.99,
		region: "Puntarenas",
		farmName: "Finca El Mirador",
		strength: "Medium",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 5.",
			imageUrl: "/images/cafe5.webp",
			imageAlt: "Paquete de Café de Especialidad 5",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 6,
		name: "Café de Especialidad 6",
		price: 20.99,
		region: "San José",
		farmName: "Finca La Esperanza",
		strength: "Extra Strong",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 6.",
			imageUrl: "/images/cafe6.webp",
			imageAlt: "Paquete de Café de Especialidad 6",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 7,
		name: "Café de Especialidad 7",
		price: 14.99,
		region: "Limón",
		farmName: "Finca El Caribe",
		strength: "Mild",
		nftMetadata: JSON.stringify({
			description: "Descripción del Café de Especialidad 7.",
			imageUrl: "/images/cafe7.webp",
			imageAlt: "Paquete de Café de Especialidad 7",
		}),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
