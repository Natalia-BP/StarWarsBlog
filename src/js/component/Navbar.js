import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="d-flex justify-content-center my-4">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1280px-Star_Wars_Yellow_Logo.svg.png"
						width="500px"
						className="img-fluid"
					/>
				</Link>
			</div>

			<nav className="navbar my-2">
				<div className="ml-auto dropdown dropleft">
					<button
						className="navBtn mr-3 btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.favorites.length + ` Favorites`}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item, index) => {
							return (
								<Link key={index} className="dropdown-item justify-content-between" to="/">
									{item.name}{" "}
									<button
										className="btn"
										onClick={() => {
											actions.removFav(item);
										}}>
										<i className="fas fa-trash-alt" />
									</button>
								</Link>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	);
};
