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
import { overviewInfo } from "../../appData";

function OverviewSection() {
	return (
		<Wrap className="col-lg my-2 px-3">
			<div className="section__header col d-flex justify-content-between align-items-center py-4">
				<div className="section__header-left">
					<h4 className=" mb-0 header__left-text">Welcome back, Ayo!</h4>
				</div>
				<div className="section__header-right flexed">
					<DropdownButton
						id="dropdown-basic-button"
						title="Today"
						className="dropdown__header">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="#/action-3">Seperated Link</Dropdown.Item>
					</DropdownButton>
					<div className="flexed">
						<span className="header__right-icon p-2 text-white bg-dark mx-1 ">
							<FiFilter />
						</span>
						<span className="header__right-icon p-2 text-white bg-dark">
							<FiRefreshCw />
						</span>
					</div>
				</div>
			</div>
			<div className="overview__wrap my-2 flexed flex-wrap mx-auto">
				{overviewInfo.map((info) => {
					const { icon, iconColor, figure, text } = info;
					return (
						<div className="overview__container mx-2 py-4 my-2 col-sm-5 col-md-5 col-lg flexed">
							<span className={`${iconColor} overview__icon`}> {icon} </span>
							<div className="overview__detail d-flex flex-column justify-content-between mr-auto">
								<h5 className="overview__figure mb-2">{figure}</h5>
								<p className="overview__text mb-0">{text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Wrap>
	);
}

export default OverviewSection;

const Wrap = styled.section`
	display: block;
`;
