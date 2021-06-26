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

function Content() {
	return (
		<>
			<Wrap className="">
				<Navigation />
				<Container fluid>
					<Row>
						<InnerSection className="col-lg mt-3">
							<div className="section__header col d-flex justify-content-between align-items-center py-4">
								<div className="section__header-left">
									<h4 className=" mb-0 header__left-text">
										Welcome back, Ayo!
									</h4>
								</div>
								<div className="section__header-right flexed">
									<DropdownButton
										id="dropdown-basic-button"
										title="Today"
										className="dropdown__header">
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											Another action
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											Something else
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item href="#/action-3">
											Seperated Link
										</Dropdown.Item>
									</DropdownButton>
									<div className="flexed">
										<span className="header__right-icon p-2 mx-1 ">
											<FiFilter />
										</span>
										<span className="header__right-icon p-2 mx ">
											<FiRefreshCw />
										</span>
									</div>
								</div>
							</div>
							<div className="overview__wrap my-2 flexed flex-wrap mx-auto">
								{overviewInfo.map((info) => {
									const { icon, iconColor, figure, text } = info;
									return (
										<div className="overview__container bg-success mx-2 py-2 my-2 col-sm-10 col-md-5 col-lg flexed">
											<span className={`${iconColor} overview__icon`}>
												{" "}
												{icon}{" "}
											</span>
											<div className="overview__detail d-flex flex-column justify-content-between mr-auto">
												<h5 className="overview__figure mb-2">{figure}</h5>
												<p className="overview__text mb-0">{text}</p>
											</div>
										</div>
									);
								})}
							</div>
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
	/* width: 80.5%; */
	@media (max-width: 425px) {
		width: 30% !important;
	}
`;

const InnerSection = styled.section``;

// col-sm-6 col-md-8  col-lg-10
