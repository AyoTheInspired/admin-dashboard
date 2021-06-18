import React from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Tooltips from "./components/Tooltips";

function Home() {
	return (
		<div>
			<Navigation />
			<Body />
			<Footer />
			{/* <Tooltips /> */}
			IM THE HOMEPAGE
		</div>
	);
}

export default Home;
