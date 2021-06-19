import React from "react";
import styled from "styled-components";
import AccordionTest from "../AccordionTest";
import Navigation from "./Navigation";

function Content() {
	return (
		<>
			<Wrap className="bg-dark">
				<Navigation />
				im the content
				{/* <AccordionTest /> */}
			</Wrap>
		</>
	);
}

export default Content;

const Wrap = styled.div`
	width: 80%;
	@media (max-width: 768px) {
		width: 71%;
	}
`;

// col-sm-6 col-md-8  col-lg-10
