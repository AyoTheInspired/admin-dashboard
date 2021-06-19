import React from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Tooltips from "./components/Tooltips";
import ReactTooltip from "react-tooltip";

function Home() {
	return (
		<div>
			{/* <Navigation /> */}
			<Body />
			{/* <Footer /> */}
			{/* <Tooltips /> */}
			<div>
				IM THE HOMEPAGE
				<a data-tip="React-tooltip">Hover Here</a>
				<ReactTooltip place="right" type="dark" effect="float"></ReactTooltip>
			</div>
		</div>
	);
}

export default Home;
