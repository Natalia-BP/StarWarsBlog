import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Estilos
import "../../styles/demo.scss";

export const CharacterFocused = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="jumbotron bg-transparent">
				<div className="flex-column flex-md-row">
					<div className="col-md-6">
						<iframe
							src="https://giphy.com/embed/3owzVYjZSzuFivWpHi"
							width="480"
							height="202"
							frameBorder="0"
							className="giphy-embed"
							allowFullScreen
						/>
						<p>
							<a href="https://giphy.com/gifs/starwars-movie-star-wars-3owzVYjZSzuFivWpHi" />
						</p>
					</div>
					<div className="col-md-6">
						<h1 className="display-4 text-sm-center text-md-left">{store.infoChars[params.theid].name}</h1>
						<p>A person within the Star Wars universe</p>
					</div>
				</div>
				<hr className="my-4 bg-warning" />
				<div className="col-sm-1 col-md-12 d-md-flex justify-content-between">
					<div className="text-center">
						<h2>Name</h2>
						<p>{store.infoChars[params.theid].name}</p>
					</div>
					<div className="text-center">
						<h2>Birth Year</h2>
						<p>{store.infoChars[params.theid].birthYear}</p>
					</div>
					<div className="text-center">
						<h2>Gender</h2>
						<p>{store.infoChars[params.theid].gender}</p>
					</div>
					<div className="text-center">
						<h2>Height</h2>
						<p>{store.infoChars[params.theid].height}</p>
					</div>
					<div className="text-center">
						<h2>Skin Color</h2>
						<p>{store.infoChars[params.theid].skin}</p>
					</div>
					<div className="text-center">
						<h2>Eye Color</h2>
						<p>{store.infoChars[params.theid].eyes}</p>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<Link to="/">
						<span className="btn btn-warning btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};
