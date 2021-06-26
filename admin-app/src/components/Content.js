import React from "react";
import {
	Container,
	Row,
	Dropdown,
	DropdownButton,
	Card,
} from "react-bootstrap";

import { FiFilter, FiRefreshCw } from "react-icons/fi";
import styled from "styled-components";
import AccordionTest from "../AccordionTest";
import { overviewInfo } from "../appData";
import Navigation from "./Navigation";
import "./content.css";
import OverviewSection from "./body-sections/OverviewSection";

function Content() {
	return (
		<>
			<Wrapper className="col-lg px-0">
				<Navigation />
				<Container fluid>
					<Row>
						<OverviewSection />
					</Row>
				</Container>
			</Wrapper>
		</>
	);
}

export default Content;

const Wrapper = styled.section`
	/* width: 100% !important; */
	@media (max-width: 425px) {
		/* width: 30% !important; */
	}
`;

// col-sm-6 col-md-8  col-lg-10
