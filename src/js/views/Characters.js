import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getState } from "../store/flux";
import { Context } from "../store/appContext";

// Estilos
import "../../styles/demo.scss";
import { element } from "prop-types";

// Images
import imgChars from "../../img/stormtroopers_chars.jpg";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	// store.infoChars.length > 0 ? "dibuja cartas" : "dibuja Cargando..."

	return store.infoChars.length > 0 ? (
		store.infoChars.map((item, index) => {
			return (
				<>
					<div className="col-md-4 mb-3" key={index}>
						<div className="card h-100">
							<img
								src={imgChars}
								className="card-img-top"
								alt="un grupo de Stormtroopers dentro de una nave"
							/>
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
								<h6 className="d-inline">Gender: </h6>
								<p className="d-inline">{item.gender}</p>
								<br />
								<h6 className="d-inline">Hair Color: </h6>
								<p className="d-inline">{item.hair}</p>
								<br />
								<h6 className="d-inline">Eye-Color: </h6>
								<p className="d-inline">{item.eyes}</p>
							</div>
							<div className="card-footer text-right">
								<Link to={"/CharacterFocused/" + index}>
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
		})
	) : (
		<h2>Cargando...</h2>
	);
};
