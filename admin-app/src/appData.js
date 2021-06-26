import {
	FaSearch,
	FaRegBell,
	FaCommentDots,
	FaPager,
	FaBookReader,
	FaRegHeart,
	FaUserCheck,
	FaMapMarkerAlt,
	FaRegCalendarAlt,
	FaUserFriends,
} from "react-icons/fa";
import { ImEqualizer2 } from "react-icons/im";
import {
	AiOutlineAppstore,
	AiOutlineBars,
	AiOutlinePieChart,
	AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {
	FiCheckCircle,
	FiShoppingCart,
	FiDollarSign,
	FiShoppingBag,
} from "react-icons/fi";
import { RiPulseLine } from "react-icons/ri";

export const navInfo = [
	{
		icon: <FaSearch />,
		tip: "Search Dashboard",
		place: "left",
		tag: "Search",
	},
	{
		icon: <FaRegBell />,
		tip: "Notifications",
		place: "top",
		tag: "Notifications",
	},
	{
		icon: <FaCommentDots />,
		tip: "Messages & Chat",
		place: "right",
		tag: "Chat",
	},
];

export const sidebarTopInfo = [
	// sidebarName: "Pages",
	{
		icon: <ImEqualizer2 />,
		title: "Dashboards",
		badge: 5,
		badgeVariant: "primary",
		children: ["Default", "Analytics", "Saas", "Social", "Crypto"],
	},
	{
		icon: <FaPager />,
		title: "Pages",
		dropArrow: true,
		children: [
			"Profile",
			"Settings",
			"Clients",
			"Projects",
			"Invoice",
			"Pricing",
			"Tasks",
		],
	},
	{
		icon: <FaUserFriends />,
		title: "Auth",
		badge: "Special",
		badgeVariant: "secondary",
		children: ["Sign In", "Sign Up", "Reset Password", "Error Pages"],
	},
	{
		icon: <AiOutlineFundProjectionScreen />,
		title: "Layouts",
		dropArrow: true,
		children: [
			"Sticky Sidebar",
			"Sidebar Collapsed",
			"Boxed Layout",
			"Classic Theme",
			"Corporate Theme",
			"Modern Theme",
		],
	},
	{
		icon: <FaBookReader />,
		title: "Documentation",
		dropArrow: true,
		children: [
			"Introduction",
			"Getting Started",
			"Customization",
			"Plugins",
			"Changelog",
		],
	},
];

export const sidebarMidInfo = [
	{
		icon: <AiOutlineAppstore />,
		title: "UI Elements",
		children: [
			"Alerts",
			"Buttons",
			"Cards",
			"Carousel",
			"Embed Video",
			"General",
			"Typography",
		],
	},
	{
		icon: <FaRegHeart />,
		title: "Icons",
		badge: "1500+",
		badgeVariant: "primary",
		children: ["Feather", "Font Awesome"],
	},
	{
		icon: <FaUserCheck />,
		title: "Forms",
		children: ["Layouts", "Basic Inputs", "Input Groups", "Floating Labels"],
	},
	{
		icon: <AiOutlineBars />,
		title: "Tables",
	},
];

export const sidebarBottomInfo = [
	{
		icon: <FiCheckCircle />,
		title: "Form Plugins",
		dropArrow: true,
		children: ["Advanced Inputs", "Editors", "Validation", "Wizard"],
	},
	{
		icon: <AiOutlineBars />,
		title: "Advanced Tables",
		dropArrow: true,
		children: ["Pagination", "Row Selection", "Expandable Rows", "Export CSV"],
	},
	{
		icon: <AiOutlinePieChart />,
		title: "Charts",
		badge: "New",
		badgeVariant: "primary",
		children: ["Charts.js", "ApexCharts"],
	},
	{
		icon: <FaRegBell />,
		title: "Notifications",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Maps",
		dropArrow: true,
		children: ["Google Maps", "Vector Maps"],
	},

	{
		icon: <FaRegCalendarAlt />,
		title: "Calendar",
	},
];

export const overviewInfo = [
	{
		icon: <FiShoppingCart />,
		iconColor: "text-primary",
		figure: "2,562",
		text: "Sales Today",
	},
	{
		icon: <RiPulseLine />,
		iconColor: "text-warning",
		figure: "17,212",
		text: "Total Clients",
	},
	{
		icon: <FiDollarSign />,
		iconColor: "text-success",
		figure: "$43,500",
		text: "Total Earnings",
	},
	{
		icon: <FiShoppingBag />,
		iconColor: "text-danger",
		figure: "50",
		text: "Pending Orders",
	},
];
