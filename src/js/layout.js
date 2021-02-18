import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

// Index
import { Home } from "./views/Home";

// Characters
import { Characters } from "./views/Characters";
import { CharacterFocused } from "./views/CharacterFocused";

// Planets
import { Planets } from "./views/Planets";
import { PlanetFocused } from "./views/PlanetFocused";

// Fixed Comps
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<div className="container-md mx-4">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/Planets">
								<Planets />
							</Route>
							<Route exact path="/PlanetFocused/:theid">
								<PlanetFocused />
							</Route>
							<Route exact path="/Characters">
								<Characters />
							</Route>
							<Route exact path="/CharacterFocused/:theid">
								<CharacterFocused />
							</Route>
						</Switch>
					</div>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
