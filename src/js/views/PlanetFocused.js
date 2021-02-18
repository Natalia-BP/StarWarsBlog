import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Estilos
import "../../styles/demo.scss";

export const PlanetFocused = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<div className="jumbotron bg-transparent">
				<div className="row">
					<div className="col-6">
						<iframe
							src="https://giphy.com/embed/1rQm9dN6pVj4EyhM1c"
							width="480"
							height="270"
							frameBorder="0"
							className="giphy-embed"
							allowFullScreen
						/>
						<p>
							<a href="https://giphy.com/gifs/starwars-star-wars-episode-7-1rQm9dN6pVj4EyhM1c" />
						</p>
					</div>
					<div className="col-6 text-center">
						<h1 className="display-4">{store.planetsInfo[params.theid].name}</h1>
						<p>A planet far far away...</p>
					</div>
				</div>
				<hr className="my-4 bg-warning" />
				<div className="col-sm-1 col-md-12 d-md-flex justify-content-between">
					<div className="text-center">
						<h2>Name</h2>
						<p>{store.planetsInfo[params.theid].name}</p>
					</div>
					<div className="text-center">
						<h2>Climate</h2>
						<p>{store.planetsInfo[params.theid].climate}</p>
					</div>
					<div className="text-center">
						<h2>Population</h2>
						<p>{store.planetsInfo[params.theid].population}</p>
					</div>
					<div className="text-center">
						<h2>Orbital Period</h2>
						<p>{store.planetsInfo[params.theid].orbital}</p>
					</div>
					<div className="text-center">
						<h2>Rotation Period</h2>
						<p>{store.planetsInfo[params.theid].rotation}</p>
					</div>
					<div className="text-center">
						<h2>Diameter</h2>
						<p>{store.planetsInfo[params.theid].diameter}</p>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<Link to="/">
						<span className="btn btn-warning btn-lg" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};
