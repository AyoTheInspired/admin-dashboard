import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SidebarBottom from "./sidebar/SidebarBottom";
import SidebarMid from "./sidebar/SidebarMid";
import SidebarTop from "./sidebar/SidebarTop";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import "./sidebar/sidebarStyles.css";
import { uid } from "react-uid";

function Sidebar() {
	return (
		<>
			<Wrap className="px-0 pb-0 d-flex flex-column justify-content-between">
				<div className="sidebar__header my-4 pt-1 pb-2 px-4 mx-auto flexed">
					<span className="sidebar__header-icon mr-2 text-primary">
						<FiBox />
					</span>
					<h5 className="mb-0 mt-1 sidebar__header-text">AppStack</h5>
				</div>
				<SidebarTop />
				<SidebarMid />
				<SidebarBottom />
				<Container fluid className="user__wrap mt-4 px-0 py-2 d-lg-block">
					<div className="user__container flexed">
						<div className="user__img-div col-5 pl-2 pr-1 flexed">
							<img src="./user.jpg" alt="" className="ml-auto w-50" />
						</div>
						<div className="user__details py-2 px-0 col-7 text-white mr-auto ml-2">
							<h5 className="user__name mb-1">Ayo Abimbola</h5>
							<h6 className="mb-0 user__status">
								<span className="status__circle mr-2">
									<GrStatusGoodSmall />
								</span>
								Online
							</h6>
							<div className=""></div>
						</div>
					</div>
				</Container>
			</Wrap>
		</>
	);
}

export default Sidebar;

const Wrap = styled.div`
	position: relative;
	background: var(--sidebar-bg);
	color: var(--pale-2);
	width: 19.5% !important;
	@media (max-width: 768px) {
		width: 28% !important;
	}
`;

// col-sm-5 col-md-4 col-lg-2
