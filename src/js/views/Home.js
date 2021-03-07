import React from "react";
import "../../styles/home.scss";

// Comps necesarios
import { Characters } from "./Characters";
import { Planets } from "./Planets";

// Images
import characters_Icon from "../../img/Characters_Icon.png";
import planets_Icon from "../../img/Planets_Icon.png";

export const Home = () => {
	return (
		<>
			<div className="header row align-items-center mb-4">
				<img className="mx-3 img-fluid" src={characters_Icon} width="50px" />
				<h2>Characters</h2>
			</div>

			<div className="card-deck">
				<Characters />
			</div>

			<div className="header row align-items-center mb-4 mt-5">
				<img className="mx-3 img-fluid" src={planets_Icon} width="50px" />
				<h2>Planets</h2>
			</div>

			<div className="card-deck">
				<Planets />
			</div>
		</>
	);
};
