import { Context } from "./appContext";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetsInfo: [{}],
			infoChars: [{}],
			favorites: []
		},
		actions: {
			addFav: favorito => {
				setStore({
					favorites: getStore().favorites.concat(favorito)
				});
			},

			removFav: favorito => {
				setStore({
					favorites: getStore().favorites.filter(function(item, index) {
						if (favorito.id !== item.id) {
							return item;
						}
					})
				});
			},

			loadSomeData: () => {
				// Fetch a profundidad planetas
				fetch("https://www.swapi.tech/api/planets?page=1&limit=10")
					.then(response => response.json())
					.then(async data => {
						let planetsBasic = data.results;
						let planetsFull = planetsBasic.map(async elem => {
							const datos = await fetch(elem.url).then(response => response.json());
							return {
								name: elem.name,
								climate: datos.result.properties.climate,
								population: datos.result.properties.population,
								orbital: datos.result.properties.orbital_period,
								rotation: datos.result.properties.rotation_period,
								diameter: datos.result.properties.diameter,
								terrain: datos.result.properties.terrain,
								id: elem.uid,
								url: elem.url
							};
						});
						let planetsFullFinal = await Promise.all(planetsFull);
						setStore({ planetsInfo: planetsFullFinal });
					});

				// Fetch a profundidad personajes
				fetch("https://www.swapi.tech/api/people?page=2&limit=10")
					.then(response => response.json())
					.then(async data => {
						let peopleBasic = data.results;
						let peopleFull = peopleBasic.map(async elem => {
							const datos = await fetch(elem.url).then(response => response.json());
							return {
								name: elem.name,
								birthYear: datos.result.properties.birth_year,
								gender: datos.result.properties.gender,
								height: datos.result.properties.height,
								skin: datos.result.properties.skin_color,
								eyes: datos.result.properties.eye_color,
								hair: datos.result.properties.hair_color,
								id: elem.uid,
								url: elem.url
							};
						});
						let peopleFullFinal = await Promise.all(peopleFull);
						setStore({ infoChars: peopleFullFinal });
					});
			}
		}
	};
};

export default getState;
