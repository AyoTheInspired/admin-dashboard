import React from "react";
import { Tooltip, OverlayTrigger, props } from "react-bootstrap";

function Tooltips({ children }) {
	<Tooltip id="button-tooltip">Simple tooltip</Tooltip>;

	return (
		<OverlayTrigger
			placement="right"
			delay={{ show: 250, hide: 400 }}
			// overlay={renderTooltip}
		>
			{children}
		</OverlayTrigger>
	);
}

export default Tooltips;
