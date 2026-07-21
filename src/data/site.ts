export const SITE_URL = 'https://www.watertowasteplumbing.com.au';

export const PHONE = '0403 305 133';
export const PHONE_TEL = 'tel:+61403305133';
export const EMAIL = 'info@watertowasteplumbing.com.au';
export const EMAIL_MAILTO = 'mailto:info@watertowasteplumbing.com.au';

export const BUSINESS_NAME = 'Water to Waste Plumbing & Gas Solutions';
export const SHORT_NAME = 'Water to Waste';

export const ADDRESS = '13/8 Innovation Drive, Totness SA';
export const ABN = '12 654 574 633';
export const LICENCE = 'PGE272409';
export const QUALIFICATION = 'Master Plumbing';
export const INSURANCE = '$20 million public liability insurance';

export const socialLinks = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/p/Water-to-Waste-Plumbing-Gas-Solutions-100083258766473/',
		icon: 'facebook',
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/water_to_waste_plumbing_gas/',
		icon: 'instagram',
	},
	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@watertowasteplumbinggas',
		icon: 'tiktok',
	},
] as const;

export const services = [
	{
		slug: 'plumbing-maintenance',
		title: 'Plumbing Maintenance',
		description:
			'Preventative maintenance, fault finding and general plumbing repairs for homes, rentals and commercial properties.',
		icon: 'maintenance',
	},
	{
		slug: 'blocked-drains',
		title: 'Blocked Drains',
		description:
			'Clear blocked toilets, sinks, sewer and stormwater drains with proper diagnosis of the cause.',
		icon: 'blocked',
	},
	{
		slug: 'high-pressure-drain-jetting',
		title: 'High-Pressure Drain Jetting',
		description:
			'High-pressure water jetting to clear grease, sludge, debris and stubborn drain build-up.',
		icon: 'drain',
	},
	{
		slug: 'cctv-drain-inspections',
		title: 'CCTV Drain Inspections',
		description:
			'Find the cause of drainage issues with camera inspections before bigger problems develop.',
		icon: 'cctv',
	},
	{
		slug: 'drain-pipe-locating',
		title: 'Drain and Pipe Locating',
		description:
			'Locate underground drains and pipework before excavation, renovations or drain repairs.',
		icon: 'locate',
	},
	{
		slug: 'leaking-taps-toilets',
		title: 'Leaking Taps & Toilets',
		description:
			'Fix dripping taps, running toilets and wasted water before they become expensive.',
		icon: 'tap',
	},
	{
		slug: 'hot-water-services',
		title: 'Hot Water Services',
		description:
			'Repairs and replacements for hot water systems so you are not left without hot water.',
		icon: 'hotwater',
	},
	{
		slug: 'gas-plumbing',
		title: 'Gas Plumbing',
		description: 'Professional gas plumbing support for homes and businesses.',
		icon: 'gas',
	},
	{
		slug: 'general-plumbing',
		title: 'General Plumbing',
		description:
			'Reliable help for everyday plumbing repairs, maintenance and installations.',
		icon: 'wrench',
	},
	{
		slug: 'renovation-plumbing',
		title: 'Renovation Plumbing',
		description:
			'Plumbing for bathroom, kitchen and laundry renovations, including fixture installation and pipework alterations.',
		icon: 'renovation',
	},
] as const;

export type ServiceSummary = (typeof services)[number];

/** Original homepage service cards (subset of full service pages). */
export const homepageServices = [
	{
		slug: 'high-pressure-drain-jetting',
		title: 'High Pressure Drain Cleaning',
		description:
			'Clear blocked drains and restore flow using high pressure drain cleaning equipment.',
		icon: 'drain',
	},
	{
		slug: 'cctv-drain-inspections',
		title: 'CCTV Drain Inspections',
		description:
			'Find the cause of drainage issues with camera inspections before bigger problems develop.',
		icon: 'cctv',
	},
	{
		slug: 'hot-water-services',
		title: 'Hot Water Services',
		description:
			'Repairs and replacements for hot water systems so you are not left without hot water.',
		icon: 'hotwater',
	},
	{
		slug: 'leaking-taps-toilets',
		title: 'Leaking Taps & Toilets',
		description:
			'Fix annoying leaks, running toilets and wasted water before they become expensive.',
		icon: 'tap',
	},
	{
		slug: 'general-plumbing',
		title: 'General Plumbing',
		description:
			'Reliable help for everyday plumbing repairs, maintenance and installations.',
		icon: 'wrench',
	},
	{
		slug: 'gas-plumbing',
		title: 'Gas Services',
		description: 'Professional gas plumbing support for homes and businesses.',
		icon: 'gas',
	},
] as const;

export const areas = [
	'Adelaide Hills',
	'Murray Bridge',
	'Metropolitan Adelaide',
	'Totness',
] as const;

export const trustPoints = [
	'Focused on service and reliability',
	'Master Plumbing · Licence PGE272409',
	'$20 million public liability insurance',
	'ABN 12 654 574 633',
	'Clear communication from first call to finished job',
	'Servicing Adelaide Hills, Murray Bridge and metropolitan Adelaide',
] as const;
