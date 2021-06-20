import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import AccordionTest from "../AccordionTest";
import Navigation from "./Navigation";

function Content() {
	return (
		<>
			<Wrap className="bg-darks col-lg  px-0">
				<Navigation />
				<Container fluid>
					<Row>
						<InnerSection className="col-lg mt-3">
							<div className="overview__container col-lg-3">
								<div className="overview__icon"></div>
								<div className="overview__text"></div>
							</div>{" "}
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
							doloribus natus error ipsa dolor tempore ea facilis odit
							consequuntur. Iste minus ea corrupti dolores amet esse, debitis
							sint fugiat eos qui libero obcaecati est deleniti voluptatem,
							harum quia cum, reiciendis blanditiis perferendis. Tempore unde
							laborum mollitia a cumque accusamus eum, quidem debitis facere, ex
							repellendus autem quia dolorem iure recusandae vitae asperiores
							laboriosam porro dolorum quae maxime incidunt? Iure, id corporis.
							Suscipit fugit eaque illo, a enim doloremque facere, adipisci vel
							repellendus sint blanditiis, optio quos porro non tempore nobis
							sunt impedit fuga veritatis placeat consequatur. Laborum soluta
							eveniet obcaecati. Eius quibusdam reiciendis eos eveniet veritatis
							autem inventore ab vitae, ea, obcaecati libero, laboriosam soluta
							accusamus mollitia! Debitis beatae nam voluptatum impedit fugit
							esse. Qui quibusdam consequuntur quo obcaecati fugit est sunt.
							Voluptates obcaecati repellendus eum facilis sunt blanditiis fuga
							recusandae, neque tempore ab maiores at harum libero sit vero
							labore cupiditate illo consequatur ipsam asperiores minima esse.
							Quam omnis commodi quae quisquam sequi fugiat perferendis id
							nostrum deserunt quaerat blanditiis iste earum ullam quis quos
							reprehenderit iusto quidem beatae, consectetur magnam? Dicta earum
							ex a provident illum neque, iure qui, cupiditate at dolor,
							laboriosam saepe deleniti harum omnis amet.{" "}
						</InnerSection>
					</Row>
				</Container>
			</Wrap>
		</>
	);
}

export default Content;

const Wrap = styled.section`
	/* width: 80.5%;
	@media (max-width: 768px) {
		width: 71%;
	} */
`;

const InnerSection = styled.section``;

// col-sm-6 col-md-8  col-lg-10
