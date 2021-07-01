import React from "react";
import styled from "styled-components";
import Body from "./components/Body";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import Tooltips from "./components/Tooltips";
// import ReactTooltip from "react-tooltip";
// import Sidebar from "./components/Sidebar";

function Home() {
	return (
		<Wrap>
			{/* <Sidebar /> */}
			<Body />
		</Wrap>
	);
}

export default Home;

const Wrap = styled.div``;
