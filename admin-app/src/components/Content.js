import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "./Navigation";
import "./content.css";
import OverviewSection from "./body-sections/OverviewSection";
import ChartFeed from "./body-sections/ChartFeed";

function Content() {
	return (
		<>
			<Wrapper className="col-lg px-0">
				<Navigation />
				<Container fluid>
					{/* <Row> */}
					<OverviewSection />
					<ChartFeed />
					{/* </Row> */}
				</Container>
			</Wrapper>
		</>
	);
}

export default Content;

const Wrapper = styled.section``;
