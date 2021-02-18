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

	return store.infoChars.map((item, index) => {
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
							<h6>Gender: {item.gender}</h6>
							<h6>Hair Color: {item.hair}</h6>
							<h6>Eye-Color: {item.eyes}</h6>
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
	});
};
