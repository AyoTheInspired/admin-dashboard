import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Content from "./Content";
import AccordionTest from "../AccordionTest";

function Body() {
	return (
		<Container fluid className="px-0">
			<Section className="d-flex justify-content-between">
				{/* <Sidebar /> */}
				<Content />
			</Section>
		</Container>
	);
}

export default Body;

const Section = styled.section`
	min-height: calc(100vh - 56px);
	background: var(--body-bg);
`;
