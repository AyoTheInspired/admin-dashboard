import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "./Navigation";
import "./content.css";
import OverviewSection from "./body-sections/OverviewSection";
import Charts from "./body-sections/Charts";

function Content() {
	return (
		<>
			<Wrapper className="col-lg px-0">
				<Navigation />
				<Container fluid>
					{/* <Row> */}
					<OverviewSection />
					<Charts />
					{/* </Row> */}
				</Container>
			</Wrapper>
		</>
	);
}

export default Content;

const Wrapper = styled.section``;
