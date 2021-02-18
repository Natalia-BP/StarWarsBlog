import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Estilos
import "../../styles/demo.scss";

// Images
import planetsImg from "../../img/landscape_planets.jpg";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return store.planetsInfo.map((item, index) => {
		return (
			<>
				<div className="col-md-4 mb-3" key={index}>
					<div className="card h-100">
						<img src={planetsImg} className="card-img-top" alt="vista el terreno de un planeta" />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<h6>Population: {item.population}</h6>
							<h6>Terrain: {item.terrain}</h6>
						</div>
						<div className="card-footer text-right">
							<Link to={"/PlanetFocused/" + index}>
								<button type="button" className="btn btn-outline-info">
									Learn More!
								</button>
							</Link>
							<button
								onClick={() => {
									actions.addFav(item);
								}}
								type="button"
								className="btn btn-outline-warning far fa-heart ml-2"
							/>
						</div>
					</div>
				</div>
			</>
		);
	});
};
