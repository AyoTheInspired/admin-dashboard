import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Body() {
	return (
		<Container fluid className="px-0">
			<Section className="bg-warning px-0 col d-flex justify-content-between">
				<Sidebar />
				<Content />
			</Section>
		</Container>
	);
}

export default Body;

const Section = styled.section`
	min-height: calc(100vh - 56px);
`;
