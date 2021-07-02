import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid className="mt-4">
			<Row>
				<Wrap className=" p-4 col mx-auto d-flex justify-content-center align-items-center">
					<div className="footer__left-wrap col-6 d-flex">
						{" "}
						<h6 className="mb-0 footer__left-item mr-3">Support</h6>
						<h6 className="mb-0 footer__left-item mr-3">Help Center</h6>
						<h6 className="mb-0 footer__left-item mr-3">Privacy</h6>
						<h6 className="mb-0 footer__left-item">Terms of Service</h6>
					</div>
					<div className="footer__right-wrap col-6 d-flex justify-content-end align-items-center">
						<span className="copyright-container mr-2 mb-1">
							<FaRegCopyright />
						</span>
						<h5 className="mb-0 footer__right-text">
							{" "}
							{new Date().getFullYear()} - Ayo TheInspired{" "}
						</h5>
					</div>
				</Wrap>
			</Row>
		</Container>
	);
}

export default Footer;

const Wrap = styled.div`
	background: #fff;
	& .footer__right-wrap,
	.footer__left-item,
	.footer__right-text {
		font-size: 14px;
		color: #495057;
		font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Helvetica Neue", Arial, sans-serif;
	}
`;
