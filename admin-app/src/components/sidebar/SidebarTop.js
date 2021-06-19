import React from "react";
import styled from "styled-components";
import { sidebarTopInfo } from "../../appData";
import "./sidebarStyles.css";
import { Badge, Dropdown, Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { uid } from "react-uid";
import { FaHome } from "react-icons/fa";

function SidebarTop() {
	return (
		<Wrap>
			{sidebarTopInfo.map((info) => {
				const {
					sidebarName,
					icon,
					title,
					dropArrow,
					badge,
					badgeVariant,
					children,
				} = info;
				return (
					<>
						<h6 className="mb-0 mb-2 mt-3 text-white sidebar__name w-100">
							{" "}
							{sidebarName}{" "}
						</h6>
						<Accordion>
							<Card className="sidebar__item-header">
								<Accordion.Toggle
									as={Card.Header}
									eventKey={title}
									className="sidebar-toggle d-flex justify-content-between align-items-center px-0 py-0 ">
									<div className="sidebar__item-a">
										<span className="sidebar__title-icon mr-2">{icon}</span>
										<h6 className="mb-0">{title}</h6>
									</div>
									<div className="ml-auto">
										{dropArrow ? (
											<div className="text-center">
												<MdKeyboardArrowDown />
											</div>
										) : (
											<div>
												<Badge
													className="sidebar__item-span bg-primary text-white "
													variant={`${badgeVariant}`}>
													{badge && badge}
												</Badge>
											</div>
										)}
									</div>
									<div>
										{/* {dropArrow ? (
											<div>
												<MdKeyboardArrowDown />
											</div>
										) : null} */}
									</div>
								</Accordion.Toggle>
							</Card>

							<div className="sidebar__children-container">
								{/* <Accordion>
									<Accordion.Toggle>{<MdKeyboardArrowDown />}</Accordion.Toggle>
								</Accordion> */}
								{/* {children?.map((child) => (
								
								))} */}
							</div>
						</Accordion>
					</>
				);
			})}
		</Wrap>
	);
}

export default SidebarTop;

const Wrap = styled.div``;
