import React from "react";
import "../../styles/home.scss";

// Comps necesarios
import { Characters } from "./Characters";
import { Planets } from "./Planets";

// Images
import charactersIcon from "../../img/characters_icon.svg";

export const Home = () => {
	return (
		<>
			<div className="header row">
				<img src={charactersIcon} width="50px" />
				<h2>Characters</h2>
			</div>

			<div className="card-deck">
				<Characters />
			</div>

			<div className="header row">
				<img src={charactersIcon} width="50px" />
				<h2>Planets</h2>
			</div>

			<div className="card-deck">
				<Planets />
			</div>
		</>
	);
};
