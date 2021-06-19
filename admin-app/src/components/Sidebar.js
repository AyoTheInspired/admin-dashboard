import React from "react";
import styled from "styled-components";
import SidebarBottom from "./sidebar/SidebarBottom";
import SidebarMid from "./sidebar/SidebarMid";
import SidebarTop from "./sidebar/SidebarTop";
import { uid } from "react-uid";

function Sidebar() {
	return (
		<Wrap className="px-3 d-flex flex-column" key={uid(Wrap)}>
			<SidebarTop />
			<SidebarMid />
			<SidebarBottom />
		</Wrap>
	);
}

export default Sidebar;

const Wrap = styled.div`
	background: var(--sidebar-bg);
	color: var(--pale-2);
	width: 19%;
	@media (max-width: 768px) {
		width: 28%;
	}
`;

// col-sm-5 col-md-4 col-lg-2
