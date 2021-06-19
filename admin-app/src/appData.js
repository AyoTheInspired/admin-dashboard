import {
	FaSearch,
	FaRegBell,
	FaCommentDots,
	FaHome,
	FaPager,
	FaUsers,
	FaBookReader,
	FaRegHeart,
	FaUserCheck,
	FaMapMarkerAlt,
	FaRegCalendarAlt,
	FaShareAlt,
	FaUserFriends,
} from "react-icons/fa";
import { ImEqualizer2 } from "react-icons/im";
import {
	AiOutlineAppstore,
	AiOutlineBars,
	AiOutlinePieChart,
	AiOutlineFundProjectionScreen,
} from "react-icons/ai";

export const navInfo = [
	{
		icon: <FaSearch />,
		tip: "Search Dashboard",
		tag: "Search",
	},
	{
		icon: <FaRegBell />,
		tip: "Notifications",
		tag: "Notifications",
	},
	{
		icon: <FaCommentDots />,
		tip: "Messages & Chat",
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
	{ sidebarName: "Tabs & Components" },
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
	{ sidebarName: "Plugin & Addons" },
	{
		icon: <AiOutlinePieChart />,
		title: "Charts",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Maps",
		children: ["Google Maps", "Vector Maps"],
	},

	{
		icon: <FaRegCalendarAlt />,
		title: "Calendar",
	},
	{
		icon: <FaShareAlt />,
		title: "Multi Level",
	},
];
