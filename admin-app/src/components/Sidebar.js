import React from "react";
import styled from "styled-components";
import SidebarBottom from "./sidebar/SidebarBottom";
import SidebarMid from "./sidebar/SidebarMid";
import SidebarTop from "./sidebar/SidebarTop";

function Sidebar() {
	return (
		<Wrap className="col-sm-5 col-md-4 col-lg-2 d-flex flex-column">
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
`;
