export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServicePage {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	intro: string;
	sections: {
		heading: string;
		paragraphs: string[];
		list?: string[];
		listIntro?: string;
	}[];
	relatedSlugs: string[];
	faqs: ServiceFaq[];
}

export const servicePages: ServicePage[] = [
	{
		slug: 'plumbing-maintenance',
		title: 'Plumbing Maintenance',
		metaTitle: 'Plumbing Maintenance Adelaide Hills | Water to Waste',
		metaDescription:
			'Reliable plumbing maintenance across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Preventative checks, fault finding and residential or commercial repairs. Call 0403 305 133.',
		h1: 'Reliable Plumbing Maintenance',
		intro:
			'Plumbing maintenance keeps small issues from turning into leaks, damage and unexpected downtime. Water to Waste Plumbing & Gas Solutions provides practical preventative plumbing maintenance and repairs for homeowners, landlords, property managers and businesses across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'What plumbing maintenance covers',
				paragraphs: [
					'Maintenance work is broader than a one-off repair. It includes checking how fixtures and pipework are performing, finding developing faults early, and sorting issues that are already causing inconvenience. Whether you manage a family home, a rental property or a small commercial site, regular attention helps systems stay reliable.',
					'We approach plumbing maintenance with a clear focus on service and reliability: identify what is going wrong, explain the options in plain language, and complete the work needed to restore dependable performance.',
				],
				listIntro: 'Typical plumbing maintenance work includes:',
				list: [
					'General plumbing repairs',
					'Preventative maintenance checks',
					'Plumbing fault finding',
					'Pipework repairs',
					'Fixture replacement',
					'Water pressure problem diagnosis',
					'Residential plumbing maintenance',
					'Commercial plumbing maintenance',
					'Rental property plumbing maintenance',
					'Ongoing maintenance for ageing systems',
				],
			},
			{
				heading: 'Common signs you need maintenance',
				paragraphs: [
					'Many plumbing problems start quietly. A tap that drips overnight, a toilet that refills more often than it should, or water pressure that feels weaker than usual can all point to wear that is worth addressing before it escalates.',
					'Property managers and landlords often notice patterns across tenancies: repeated leak call-outs, older bathrooms that need fixture updates, or pipework that has been patched without a lasting solution. Preventative plumbing maintenance helps reduce those recurring interruptions.',
				],
				listIntro: 'Arrange a maintenance visit if you notice:',
				list: [
					'Dripping taps or fittings that need frequent adjustment',
					'Toilets that run, refill or lose water between flushes',
					'Reduced or inconsistent water pressure',
					'Minor leaks around valves, joins or fixtures',
					'Noises in pipework when taps are opened or closed',
					'Older fixtures that are due for replacement',
					'Repeated plumbing faults at the same property',
				],
			},
			{
				heading: 'How a maintenance visit usually works',
				paragraphs: [
					'A useful maintenance visit starts with understanding the problem and the property. That may mean checking accessible pipework, testing fixtures, assessing water pressure, and looking for early signs of wear. Fault finding is an important part of the process, especially when the cause is not obvious from a single symptom.',
					'From there, repair or replacement options can be discussed based on what is found. Some jobs are straightforward fixture or seal replacements. Others involve pipework repairs or planning a broader update. The aim is a practical solution that matches the condition of the system, not unnecessary work.',
				],
			},
			{
				heading: 'Benefits of preventative plumbing maintenance',
				paragraphs: [
					'Addressing faults early usually costs less than repairing water damage later. Preventative plumbing maintenance also helps conserve water, improves comfort day to day, and gives landlords and businesses clearer scheduling around repairs.',
					'For residential and commercial properties alike, regular attention supports safer, more reliable plumbing. When combined with related work such as leaking tap and toilet repairs, hot water servicing or broader general plumbing, maintenance becomes part of keeping the property running smoothly.',
				],
			},
			{
				heading: 'Plumbing maintenance across our service areas',
				paragraphs: [
					'We provide residential plumbing maintenance, commercial plumbing maintenance and rental property plumbing maintenance throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you need help with preventative checks, fault finding or general plumbing repairs, call Water to Waste to discuss the job.',
				],
			},
		],
		relatedSlugs: [
			'leaking-taps-toilets',
			'hot-water-services',
			'general-plumbing',
			'renovation-plumbing',
		],
		faqs: [
			{
				question: 'What is included in plumbing maintenance?',
				answer:
					'Plumbing maintenance can include preventative checks, fault finding, general repairs, fixture replacement, pipework repairs and help with water pressure problems. The exact work depends on the property and the issues found.',
			},
			{
				question: 'Do you offer plumbing maintenance for rental properties?',
				answer:
					'Yes. Rental property plumbing maintenance is a common request from landlords and property managers who need reliable repairs and clear communication when tenants report faults.',
			},
			{
				question: 'Is preventative maintenance worth it if nothing has failed yet?',
				answer:
					'Often yes. Small leaks, worn seals and pressure issues are easier to manage before they cause damage, water waste or unexpected downtime at a home or business.',
			},
			{
				question: 'Can you help with commercial plumbing maintenance?',
				answer:
					'Yes. We can assist with commercial plumbing maintenance needs as well as residential work across our Adelaide Hills, Murray Bridge and metropolitan Adelaide service areas.',
			},
		],
	},
	{
		slug: 'blocked-drains',
		title: 'Blocked Drains',
		metaTitle: 'Blocked Drains Adelaide Hills & Murray Bridge | Water to Waste',
		metaDescription:
			'Blocked drain clearing and diagnosis for Adelaide Hills, Murray Bridge and metropolitan Adelaide. Blocked toilets, sinks, sewer and stormwater issues. Call 0403 305 133.',
		h1: 'Blocked Drain Clearing and Diagnosis',
		intro:
			'A blocked drain can disrupt a kitchen, bathroom or whole property quickly. Water to Waste Plumbing & Gas Solutions provides blocked drain clearing and diagnosis for homes and businesses across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas — with a focus on finding the cause, not only applying a temporary fix.',
		sections: [
			{
				heading: 'Blocked drains need more than a temporary clear',
				paragraphs: [
					'Drain clearing can restore flow, but recurring blockages usually mean something is still wrong in the line. Grease build-up, foreign objects, tree-root intrusion, collapsed sections or a deeper sewer blockage can all create the same early symptoms. Treating only the surface of the problem often leads to the same drain blocking again.',
					'That is why diagnosis matters. Understanding whether you have a local fixture blockage, a shared line issue, or a more serious pipe problem helps determine the right next step — whether that is clearing, high-pressure drain jetting, a CCTV drain inspection, or locating the line before further work.',
				],
			},
			{
				heading: 'Common signs of a blocked drain',
				paragraphs: [
					'Blocked drains Adelaide Hills and Murray Bridge customers report often start with slow drainage that gradually worsens. Bad smells, gurgling and water backing up are also common warning signs that should not be ignored.',
				],
				listIntro: 'Watch for symptoms such as:',
				list: [
					'Slow drainage in sinks, showers or baths',
					'Gurgling sounds from drains or toilets',
					'Bad smells from floor wastes or outdoor drains',
					'Water backing up into fixtures',
					'Overflowing drains after rain or heavy use',
					'A blocked toilet that will not clear normally',
					'A blocked sink that returns soon after clearing',
					'Recurring blocked drains in the same area',
					'Multiple fixtures affected at once',
					'Signs of a sewer blockage or stormwater blockage',
				],
			},
			{
				heading: 'What blocked drain service involves',
				paragraphs: [
					'A blocked drain visit usually starts with identifying which fixtures are affected and where the restriction is likely to be. A single blocked sink can be a local issue. When several fixtures are slow, or outdoor drains are involved, the problem may sit further along the line.',
					'Clearing methods are chosen based on the situation. Some blockages respond to targeted clearing. Stubborn grease, sludge or debris may need high-pressure drain jetting. Where blockages keep returning, a CCTV drain inspection can show whether roots, cracks, collapse or another defect is involved. Drain and pipe locating may also be useful before excavation or repair planning.',
				],
			},
			{
				heading: 'Why proper diagnosis protects the property',
				paragraphs: [
					'Repeated temporary fixes can waste time and leave the underlying cause untouched. Proper diagnosis reduces guesswork, helps protect landscaping and floors from overflow damage, and supports a clearer repair plan when pipework is the real issue.',
					'For landlords and businesses, diagnosing recurring blocked drains also means fewer interrupted tenancies or trading hours. Service and reliability matter most when a blockage is disrupting daily use of the property.',
				],
			},
			{
				heading: 'Blocked drain help across Adelaide and the Hills',
				paragraphs: [
					'We assist with blocked drains Adelaide Hills, blocked drains Murray Bridge and blocked drains Adelaide customers commonly deal with — including toilets, sinks, sewer lines and stormwater systems. If drainage has slowed, smells are building, or water is backing up, contact Water to Waste to arrange clearing and diagnosis.',
				],
			},
		],
		relatedSlugs: [
			'high-pressure-drain-jetting',
			'cctv-drain-inspections',
			'drain-pipe-locating',
			'plumbing-maintenance',
		],
		faqs: [
			{
				question: 'Why does my drain keep blocking?',
				answer:
					'Recurring blocked drains often point to build-up, foreign objects, tree roots, pipe damage or a deeper sewer issue. Clearing may restore flow temporarily, but diagnosis helps identify why the blockage returns.',
			},
			{
				question: 'Can you clear a blocked toilet or sink?',
				answer:
					'Yes. Blocked toilet and blocked sink issues are common call-outs. We assess whether the restriction is local to the fixture or part of a wider drain or sewer blockage.',
			},
			{
				question: 'When is a CCTV inspection recommended?',
				answer:
					'A CCTV drain inspection is useful when blockages recur, when multiple fixtures are affected, or when there is reason to suspect roots, cracks, collapse or another pipe defect.',
			},
			{
				question: 'Do you clear stormwater blockages as well as sewer blockages?',
				answer:
					'Yes. Stormwater blockage and sewer blockage issues can both disrupt a property. The approach depends on the system involved and what is found during diagnosis.',
			},
		],
	},
	{
		slug: 'high-pressure-drain-jetting',
		title: 'High-Pressure Drain Jetting',
		metaTitle: 'High-Pressure Drain Jetting Adelaide | Water to Waste',
		metaDescription:
			'High-pressure drain jetting across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Clear grease, sludge and stubborn drain build-up. Call 0403 305 133.',
		h1: 'High-Pressure Drain Jetting',
		intro:
			'High-pressure drain jetting uses focused water pressure to clean inside drain lines and restore flow when grease, sludge or debris has built up. Water to Waste Plumbing & Gas Solutions provides drain jetting services for properties across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'How high-pressure drain jetting works',
				paragraphs: [
					'High-pressure jet blasting sends water through the drain line to break up and flush away material clinging to the pipe walls. Unlike a quick surface clear, jetting is aimed at cleaning the internal surface of the drain so flow can improve more thoroughly.',
					'It is a useful drain cleaning method for many stubborn restrictions, but it is not suitable for every pipe condition or every blockage. Damaged, collapsed or fragile pipework may need a different approach. Where the cause is unclear, CCTV inspection or further diagnosis may be recommended first.',
				],
			},
			{
				heading: 'What jetting may clear',
				paragraphs: [
					'High-pressure drain jetting Adelaide customers often need help with build-up that ordinary clearing does not fully resolve. Grease from kitchens, sludge in older lines and debris washed into drains are common examples.',
				],
				listIntro: 'Jetting may help with:',
				list: [
					'Grease blockage removal',
					'Sludge removal',
					'Debris lodged in the line',
					'General drain build-up',
					'Some tree-root intrusion',
					'Stubborn drain blockages that keep slowing flow',
					'Sewer clearing where the line condition allows',
				],
			},
			{
				heading: 'When diagnosis should come first',
				paragraphs: [
					'Not every blockage is a cleaning problem. If a drain collapses, misaligns, or has a solid obstruction that jetting cannot safely address, forcing the wrong method can waste time or complicate the repair. CCTV drain inspections help show what is inside the line before choosing the next step.',
					'Drain and pipe locating can also matter when the line path is unknown and further access or repair may be needed. Combining diagnosis with the right clearing method usually produces a clearer outcome than repeating temporary fixes.',
				],
			},
			{
				heading: 'Benefits of professional drain cleaning',
				paragraphs: [
					'Professional high-pressure drain jetting helps restore flow, reduce odours linked to stagnant build-up, and lower the chance of an immediate repeat blockage caused by leftover grease or sludge. It is particularly useful where kitchens, older drainage systems or recurring slow drains are involved.',
					'For homeowners, landlords and businesses, the benefit is practical: a cleaner line and a better understanding of whether the problem was build-up alone or something that still needs repair.',
				],
			},
			{
				heading: 'Drain jetting across our service areas',
				paragraphs: [
					'We provide high-pressure drain jetting and related drain cleaning support throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you have a stubborn blockage or recurring slow drainage, call Water to Waste to discuss whether jetting or further diagnosis is the better first step.',
				],
			},
		],
		relatedSlugs: ['blocked-drains', 'cctv-drain-inspections', 'drain-pipe-locating'],
		faqs: [
			{
				question: 'Is high-pressure drain jetting suitable for every blockage?',
				answer:
					'No. Jetting can be effective for grease, sludge, debris and some root intrusion, but it is not suitable for every pipe or every blockage. Damaged or collapsed pipework may need a different approach.',
			},
			{
				question: 'Do I need a CCTV inspection before jetting?',
				answer:
					'Not always, but CCTV inspection or diagnosis may be recommended first when the cause is unclear, blockages keep returning, or there is concern about pipe condition.',
			},
			{
				question: 'Can jetting remove tree roots from drains?',
				answer:
					'High-pressure jetting may help with some tree-root intrusion, but root problems can also involve damaged pipework. Further inspection helps determine whether clearing alone is enough.',
			},
			{
				question: 'What is the difference between drain clearing and drain jetting?',
				answer:
					'Drain clearing focuses on restoring flow through a restriction. High-pressure drain jetting is a more thorough cleaning method that targets build-up along the pipe walls where the line condition allows it.',
			},
		],
	},
	{
		slug: 'cctv-drain-inspections',
		title: 'CCTV Drain Inspections',
		metaTitle: 'CCTV Drain Camera Inspections Adelaide | Water to Waste',
		metaDescription:
			'CCTV drain inspections across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Camera diagnosis for roots, cracks, collapsed drains and recurring blockages. Call 0403 305 133.',
		h1: 'CCTV Drain Camera Inspections',
		intro:
			'A CCTV drain inspection shows what is happening inside a drain line so repairs and clearing are based on evidence, not guesswork. Water to Waste Plumbing & Gas Solutions provides drain camera inspection services for properties across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'Why camera inspection improves drain diagnosis',
				paragraphs: [
					'Slow drains and recurring blockages can have many causes. A sewer camera inspection or pipe inspection lets us view the internal condition of the line and identify issues that are not obvious from fixtures alone. That clarity is especially useful when a drain has been cleared before but the problem keeps returning.',
					'CCTV drain inspections Adelaide customers often request after repeated call-outs, unexplained odours, or before committing to excavation. Seeing the line helps separate a cleaning job from a repair job.',
				],
			},
			{
				heading: 'What CCTV inspections may identify',
				paragraphs: [
					'Drain diagnosis with a camera is useful because different defects can create similar symptoms. Identifying the actual cause supports a more accurate next step, whether that is jetting, locating, repair planning or further monitoring.',
				],
				listIntro: 'A camera inspection may help identify:',
				list: [
					'Tree roots in drains',
					'Cracked drainage pipes',
					'Collapsed drains or collapsed sections',
					'Misaligned pipes',
					'Foreign objects in the line',
					'Heavy build-up of grease, sludge or debris',
					'Damaged pipework',
					'Causes of recurring drain blockages',
				],
			},
			{
				heading: 'When a CCTV drain inspection is useful',
				paragraphs: [
					'Camera inspection is particularly helpful when multiple fixtures are affected, when outdoor drains overflow, or when blockages return soon after clearing. It can also support renovation or repair planning where the condition of existing drainage needs to be understood before work begins.',
					'In many cases, CCTV sits alongside blocked drain clearing, high-pressure drain jetting and drain and pipe locating. Clearing restores use; inspection explains why the problem happened; locating helps plan access if repair is needed.',
				],
			},
			{
				heading: 'Benefits of professional drain diagnosis',
				paragraphs: [
					'Accurate diagnosis reduces unnecessary digging, avoids repeating temporary fixes, and helps property owners make informed decisions. For landlords and businesses, it also provides clearer communication about the condition of the drainage system and the work required.',
					'Service and reliability depend on knowing what you are dealing with. A drain camera inspection turns uncertainty into a practical plan.',
				],
			},
			{
				heading: 'CCTV drain inspections across our service areas',
				paragraphs: [
					'We provide CCTV drain inspections throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you have recurring drain blockages or need a clearer picture of pipe condition, contact Water to Waste to discuss a camera inspection.',
				],
			},
		],
		relatedSlugs: [
			'blocked-drains',
			'high-pressure-drain-jetting',
			'drain-pipe-locating',
		],
		faqs: [
			{
				question: 'What is a CCTV drain inspection?',
				answer:
					'A CCTV drain inspection uses a camera to view the inside of a drain or sewer line. It helps identify roots, cracks, collapse, misalignment, foreign objects, heavy build-up and other causes of drainage problems.',
			},
			{
				question: 'Do I need CCTV if the drain has already been cleared?',
				answer:
					'If the blockage was a one-off and flow has stayed normal, further inspection may not be needed. If problems recur, a camera inspection is a practical way to find the underlying cause.',
			},
			{
				question: 'Can CCTV find tree roots or collapsed drains?',
				answer:
					'Yes. Tree roots in drains, cracked drainage pipes, collapsed sections and misaligned pipes are among the issues a sewer camera inspection can help identify.',
			},
			{
				question: 'Is drain camera inspection useful before renovation work?',
				answer:
					'It can be. Understanding existing drainage condition before alterations or excavation helps reduce unexpected issues during bathroom, kitchen or site works.',
			},
		],
	},
	{
		slug: 'drain-pipe-locating',
		title: 'Drain and Pipe Locating',
		metaTitle: 'Drain and Pipe Locating Adelaide | Water to Waste',
		metaDescription:
			'Drain and pipe locating across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Find underground drain position and depth before excavation or renovations. Call 0403 305 133.',
		h1: 'Drain and Pipe Locating',
		intro:
			'Underground plumbing is easy to damage when its position is unknown. Drain and pipe locating helps establish where lines run and the approximate depth before digging, repairing or renovating. Water to Waste Plumbing & Gas Solutions provides locating support across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'Why locating underground plumbing matters',
				paragraphs: [
					'Excavation without knowing the path of a drain or sewer line risks cutting pipework, delaying the job and creating a larger repair. Drain locating and pipe locating give a clearer picture of underground plumbing location before work starts.',
					'This is useful for homeowners planning landscaping, builders preparing site works, and anyone facing drain repairs where the line is not visible. Locating does not replace careful digging, but it reduces guesswork around drain depth and position.',
				],
			},
			{
				heading: 'When drain and pipe locating is useful',
				paragraphs: [
					'Underground drain locating is commonly requested before work that could disturb buried services. It pairs well with CCTV drain inspections when the condition of the line and its route both need to be understood.',
				],
				listIntro: 'Locating services may help before:',
				list: [
					'Excavation for drain repairs',
					'Pipe replacement planning',
					'Bathroom, kitchen or laundry renovations',
					'Landscaping that involves digging',
					'Construction or site preparation',
					'Sewer locating where the route is unclear',
					'Any plumbing work that depends on underground access',
				],
			},
			{
				heading: 'How locating fits with inspection and repair',
				paragraphs: [
					'Locating answers where the line is. CCTV inspection helps show what condition it is in. Blocked drain clearing or jetting may restore flow, but if repair or replacement is required, knowing the approximate position and depth supports a more controlled plan.',
					'For renovation plumbing, early locating can prevent layout surprises later — especially where drainage alterations or fixture changes depend on existing underground services.',
				],
			},
			{
				heading: 'Benefits of professional locating',
				paragraphs: [
					'Professional underground plumbing location helps protect existing services, reduces unnecessary digging, and improves coordination with other trades. For property managers and businesses, it also supports clearer planning around access and disruption.',
					'Reliable locating is part of responsible plumbing work: understand the system before you open the ground.',
				],
			},
			{
				heading: 'Drain locating across our service areas',
				paragraphs: [
					'We provide drain locating Adelaide and pipe locating Adelaide support throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you need to confirm drain depth and position before excavation or renovations, call Water to Waste to discuss the job.',
				],
			},
		],
		relatedSlugs: ['cctv-drain-inspections', 'blocked-drains', 'renovation-plumbing'],
		faqs: [
			{
				question: 'What does drain and pipe locating tell you?',
				answer:
					'Locating helps determine the position and approximate depth of underground drains or pipework so excavation, repairs or renovations can be planned with less guesswork.',
			},
			{
				question: 'Do I need locating if I already have a CCTV inspection?',
				answer:
					'Not always. CCTV focuses on internal condition, while locating focuses on where the line runs. Many jobs benefit from both when repair or excavation is likely.',
			},
			{
				question: 'Is locating useful before landscaping or construction?',
				answer:
					'Yes. Underground drain locating is particularly useful before landscaping, construction or any digging that could disturb sewer or drainage pipework.',
			},
			{
				question: 'Can locating help with renovation plumbing?',
				answer:
					'Yes. Confirming existing drain routes before bathroom, kitchen or laundry changes can prevent layout and drainage problems during the renovation.',
			},
		],
	},
	{
		slug: 'leaking-taps-toilets',
		title: 'Leaking Taps and Toilets',
		metaTitle: 'Leaking Tap & Toilet Repairs Adelaide | Water to Waste',
		metaDescription:
			'Leaking tap and toilet repairs across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Fix dripping taps, running toilets and faulty cisterns. Call 0403 305 133.',
		h1: 'Leaking Tap and Toilet Repairs',
		intro:
			'Dripping taps and running toilets waste water and rarely improve on their own. Water to Waste Plumbing & Gas Solutions provides leaking tap repairs and leaking toilet repairs for homes, rentals and businesses across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'Small leaks become ongoing costs',
				paragraphs: [
					'A dripping tap repair may seem minor, but constant drips add up on water bills and can stain sinks or damage surrounding finishes. A running toilet repair is similar: water escaping through a faulty cistern can run for hours without much noise, especially overnight.',
					'Sorting these issues early is practical plumbing leak repair work. It protects fixtures, reduces waste and restores quiet, reliable use of everyday fittings.',
				],
			},
			{
				heading: 'Common tap and toilet problems',
				paragraphs: [
					'Leaking tap repairs Adelaide customers request often involve worn washers, seals or cartridges. Toilet faults are frequently linked to inlet or outlet valves, worn seals, or cistern components that no longer shut off cleanly.',
				],
				listIntro: 'We commonly help with:',
				list: [
					'Dripping taps',
					'Running toilets',
					'Toilets that refill continuously',
					'Leaks around the toilet base',
					'Faulty toilet cistern components',
					'Faulty inlet valves',
					'Faulty outlet valves',
					'Toilet valve replacement',
					'Worn seals',
					'Damaged fixtures that need repair or replacement',
					'Water pressure issues affecting tap performance',
				],
			},
			{
				heading: 'What a repair visit usually involves',
				paragraphs: [
					'A repair starts with identifying the source of the leak or continuous refill. For taps, that may mean checking spindles, cartridges, aerators or supply connections. For toilets, it often means assessing cistern valves, seals and whether the bowl or base connection is involved.',
					'Some faults are resolved with targeted part replacement. Others need a broader fixture update if the tap or toilet is worn out. Water pressure issues can also affect how fittings behave, so fault finding may extend beyond the visible drip.',
				],
			},
			{
				heading: 'Benefits of fixing leaks properly',
				paragraphs: [
					'Proper repair stops ongoing water loss, reduces mould and staining risk around fixtures, and improves comfort in bathrooms and kitchens. For landlords and property managers, prompt leaking toilet and tap repairs also reduce tenant complaints and avoidable water charges.',
					'These jobs often sit alongside wider plumbing maintenance, general plumbing and renovation plumbing when fixtures are being updated rather than patched indefinitely.',
				],
			},
			{
				heading: 'Tap and toilet repairs across our service areas',
				paragraphs: [
					'We provide leaking tap and toilet repairs throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you have a dripping tap, running toilet or faulty cistern, contact Water to Waste to arrange a repair.',
				],
			},
		],
		relatedSlugs: ['plumbing-maintenance', 'general-plumbing', 'renovation-plumbing'],
		faqs: [
			{
				question: 'Why is my toilet running constantly?',
				answer:
					'A toilet that refills continuously often has a faulty inlet valve, outlet valve, worn seal or another cistern fault. A running toilet repair identifies which component is failing so it can be fixed or replaced.',
			},
			{
				question: 'Should I ignore a dripping tap?',
				answer:
					'It is better not to. Dripping taps waste water and can damage finishes over time. A dripping tap repair is usually simpler before surrounding surfaces or fittings are affected.',
			},
			{
				question: 'Can you replace toilet valves and seals?',
				answer:
					'Yes. Toilet valve replacement and seal repairs are common solutions when cistern components no longer shut off correctly or leaks develop around the fixture.',
			},
			{
				question: 'Do you repair taps and toilets in rental properties?',
				answer:
					'Yes. Landlords and property managers regularly need leaking tap and toilet repairs to keep rental properties functional and reduce water waste.',
			},
		],
	},
	{
		slug: 'hot-water-services',
		title: 'Hot Water Services',
		metaTitle: 'Hot Water Repairs & Replacements Adelaide | Water to Waste',
		metaDescription:
			'Hot water repairs and replacements across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Help with no hot water, leaks and failing systems. Call 0403 305 133.',
		h1: 'Hot Water Repairs and Replacements',
		intro:
			'Losing hot water affects showers, washing and daily comfort immediately. Water to Waste Plumbing & Gas Solutions provides hot water repairs Adelaide Hills and Murray Bridge customers rely on, along with hot water system assessment and replacement advice across metropolitan Adelaide, Totness and surrounding areas.',
		sections: [
			{
				heading: 'Hot water problems need the right diagnosis',
				paragraphs: [
					'Not every hot water issue means the whole system must be replaced. Some faults are repairable. Others point to an older or failing unit where replacement is the more practical option. The correct solution depends on the system type, its condition and the fault identified — not on a one-size-fits-all recommendation.',
					'We focus on clear assessment and reliable workmanship so you can decide based on what the system actually needs.',
				],
			},
			{
				heading: 'Warning signs of hot water trouble',
				paragraphs: [
					'Hot water repairs Adelaide homeowners request often start with a sudden loss of supply, but gradual symptoms matter too. Temperature changes, leaks and unusual noises can all signal that a system needs attention.',
				],
				listIntro: 'Arrange a hot water check if you notice:',
				list: [
					'No hot water',
					'Inconsistent water temperature',
					'Hot water running out quickly',
					'A leaking hot water system',
					'Unusual noises from the unit',
					'Rust-coloured water',
					'Reduced hot-water pressure',
					'An older or failing system that is becoming unreliable',
				],
			},
			{
				heading: 'Repairs, replacements and installation considerations',
				paragraphs: [
					'A hot water plumber Murray Bridge or Adelaide Hills customers call may need to assess valves, connections, system performance and signs of corrosion or leakage. Where repair is suitable, that can restore service without unnecessary replacement.',
					'Where the system is at the end of its useful life, hot water system replacement or hot water installation may be discussed. System choice depends on the property, existing connections, usage needs and what is found on inspection. We do not recommend a specific system without enough information about the site and the fault.',
				],
			},
			{
				heading: 'How hot water work links to other plumbing services',
				paragraphs: [
					'Gas hot water systems may involve gas plumbing considerations. Broader plumbing maintenance and general plumbing work can also affect supply lines, pressure and fixture performance connected to hot water use.',
					'Getting the diagnosis right first helps avoid replacing parts that are not the real cause, or delaying a replacement that is clearly due.',
				],
			},
			{
				heading: 'Hot water services across our service areas',
				paragraphs: [
					'We provide hot water repairs, assessments and replacement discussions throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you have no hot water, a leaking system or inconsistent temperature, call Water to Waste for help.',
				],
			},
		],
		relatedSlugs: ['gas-plumbing', 'plumbing-maintenance', 'general-plumbing'],
		faqs: [
			{
				question: 'Why do I have no hot water?',
				answer:
					'Causes vary by system and can include component faults, supply issues, leaks or an older unit that is failing. A hot water repair visit starts by identifying the fault before recommending repair or replacement.',
			},
			{
				question: 'Can a leaking hot water system be repaired?',
				answer:
					'Sometimes. Minor connection or valve issues may be repairable. Significant tank or system leaks on an ageing unit often mean replacement is the more practical option.',
			},
			{
				question: 'Will you recommend a specific hot water system?',
				answer:
					'Only with enough information. The right system depends on the property, existing setup, usage needs and the condition of the current unit. We do not push a fixed recommendation without assessing the situation.',
			},
			{
				question: 'Do you service hot water systems in the Adelaide Hills and Murray Bridge?',
				answer:
					'Yes. Hot water repairs Adelaide Hills and hot water plumber Murray Bridge work are part of our regular service coverage, along with metropolitan Adelaide and Totness and surrounding areas.',
			},
		],
	},
	{
		slug: 'gas-plumbing',
		title: 'Gas Plumbing',
		metaTitle: 'Gas Plumber Adelaide Hills & Murray Bridge | Water to Waste',
		metaDescription:
			'Licensed gas plumber for Adelaide Hills, Murray Bridge and metropolitan Adelaide. Gas appliance connections, pipework, repairs and leak investigation. Call 0403 305 133.',
		h1: 'Professional Gas Plumbing Services',
		intro:
			'Gas plumbing must be handled carefully and by licensed tradespeople. Water to Waste Plumbing & Gas Solutions provides gas plumber Adelaide Hills and Murray Bridge support for homes and businesses across metropolitan Adelaide, Totness and surrounding areas, with licence PGE272409 and a focus on safe, reliable work.',
		sections: [
			{
				heading: 'Licensed gas plumbing for homes and businesses',
				paragraphs: [
					'Gas fitting services cover more than connecting an appliance. Pipework, alterations, maintenance and investigation of suspected issues all need a professional approach. If you smell gas, leave the area if needed, avoid creating ignition sources, and contact the appropriate emergency services or your gas supplier as required — then arrange licensed gas plumbing assistance.',
					'We do not provide DIY gas repair instructions. Gas work should not be improvised.',
				],
			},
			{
				heading: 'Gas plumbing services we can assist with',
				paragraphs: [
					'As a gas plumber Adelaide customers and regional clients can contact for practical support, we help with installations and repairs where licensed gas plumbing is required.',
				],
				listIntro: 'Typical gas plumbing work includes:',
				list: [
					'Gas appliance connections',
					'Gas pipework installation and alterations',
					'Gas pipe repairs',
					'Gas line alterations',
					'Gas leak investigation',
					'Gas plumbing maintenance',
					'General gas fitting services for residential and commercial properties',
				],
			},
			{
				heading: 'Safety-focused approach',
				paragraphs: [
					'Gas leak investigation and related work are treated seriously. The goal is to identify concerns properly and carry out licensed rectification where needed. Claims beyond our supplied licence and qualification information are not made here: Water to Waste holds Master Plumbing qualification and gas plumbing licence PGE272409, with $20 million public liability insurance.',
					'If an appliance connection, pipe alteration or maintenance issue is involved, clear communication about what was found and what work is required remains central to how we operate.',
				],
			},
			{
				heading: 'How gas plumbing connects with other services',
				paragraphs: [
					'Gas hot water systems often sit at the intersection of gas plumbing and hot water services. Renovation plumbing may also require gas line alterations when kitchens or laundry spaces are redesigned. General plumbing work can run alongside gas work when broader property upgrades are underway.',
					'Involving a licensed gas plumber early helps keep appliance placement, pipe routes and compliance considerations aligned with the rest of the project.',
				],
			},
			{
				heading: 'Gas plumber services across our service areas',
				paragraphs: [
					'We provide gas plumber Adelaide Hills, gas plumber Murray Bridge and metropolitan Adelaide coverage, including Totness and surrounding areas. For gas appliance connections, pipework, repairs or leak investigation, call Water to Waste on 0403 305 133.',
				],
			},
		],
		relatedSlugs: ['hot-water-services', 'renovation-plumbing', 'general-plumbing'],
		faqs: [
			{
				question: 'Are you licensed for gas plumbing?',
				answer:
					'Yes. Water to Waste Plumbing & Gas Solutions holds Master Plumbing qualification and licence PGE272409 for gas plumbing work.',
			},
			{
				question: 'Can you connect gas appliances?',
				answer:
					'Yes. Gas appliance connections are part of our gas fitting services, along with related pipework and alterations where required.',
			},
			{
				question: 'What should I do if I suspect a gas leak?',
				answer:
					'Treat it as a safety issue. Leave the area if needed, avoid ignition sources, and contact the appropriate emergency services or gas supplier as required. Then arrange licensed gas leak investigation. Do not attempt DIY gas repairs.',
			},
			{
				question: 'Do you handle gas work during renovations?',
				answer:
					'Yes. Renovation plumbing often includes gas line alterations for kitchens and other spaces. Involving a gas plumber early helps plan connections and pipe routes properly.',
			},
		],
	},
	{
		slug: 'general-plumbing',
		title: 'General Plumbing',
		metaTitle: 'General Plumbing Adelaide Hills & Murray Bridge | Water to Waste',
		metaDescription:
			'General plumber for Adelaide Hills, Murray Bridge and metropolitan Adelaide. Residential and commercial plumbing repairs, installations and fault finding. Call 0403 305 133.',
		h1: 'General Residential and Commercial Plumbing',
		intro:
			'General plumbing covers the everyday repairs, installations and fault finding that keep a property working. Water to Waste Plumbing & Gas Solutions provides general plumber Adelaide Hills and Murray Bridge support for residential and commercial customers across metropolitan Adelaide, Totness and surrounding areas.',
		sections: [
			{
				heading: 'Practical plumbing help for homes and businesses',
				paragraphs: [
					'Not every job fits a narrow specialty from the first call. A plumber Adelaide Hills or Murray Bridge customer contacts may be dealing with a mix of pipework issues, fixture problems, pressure concerns or installation needs. General residential plumbing and commercial plumbing exist for that reality.',
					'Our approach stays straightforward: understand the problem, explain the options, and complete reliable plumbing repairs or installations with clear communication throughout.',
				],
			},
			{
				heading: 'What general plumbing can include',
				paragraphs: [
					'General plumbing is the foundation that specialist services build on. It is often the starting point when a property needs a mix of repairs and practical upgrades.',
				],
				listIntro: 'Common general plumbing work includes:',
				list: [
					'General plumbing repairs',
					'Pipework repairs',
					'Fixture replacements',
					'Water pressure problems',
					'Plumbing installations',
					'Plumbing fault finding',
					'Residential plumbing',
					'Commercial plumbing',
					'Maintenance work linked to day-to-day system performance',
				],
			},
			{
				heading: 'When to call a general plumber',
				paragraphs: [
					'Call for general plumbing when fixtures fail, pipework leaks, pressure drops, or a new installation needs licensed work. It is also the right starting point when you are unsure which specialist service applies — for example, whether a problem is a simple repair, a hot water issue, a drain concern or part of a larger renovation.',
					'From there, work can move into related services such as plumbing maintenance, blocked drains, hot water services, gas plumbing, leaking taps and toilets, or renovation plumbing as needed.',
				],
			},
			{
				heading: 'Benefits of clear diagnosis and professional repair',
				paragraphs: [
					'Proper fault finding prevents replacing the wrong part or ignoring a related issue further along the system. Professional repair also protects the surrounding property from water damage and helps landlords, property managers and businesses schedule work with fewer surprises.',
					'Service and reliability matter most on the ordinary jobs that keep bathrooms, kitchens, laundries and commercial amenities usable every day.',
				],
			},
			{
				heading: 'General plumbing across our service areas',
				paragraphs: [
					'We provide general plumbing throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you need a plumber for repairs, installations or fault finding, contact Water to Waste to discuss the job.',
				],
			},
		],
		relatedSlugs: [
			'plumbing-maintenance',
			'blocked-drains',
			'high-pressure-drain-jetting',
			'cctv-drain-inspections',
			'drain-pipe-locating',
			'leaking-taps-toilets',
			'hot-water-services',
			'gas-plumbing',
			'renovation-plumbing',
		],
		faqs: [
			{
				question: 'What is the difference between general plumbing and specialist services?',
				answer:
					'General plumbing covers everyday repairs, installations and fault finding. Specialist pages focus more deeply on areas such as blocked drains, CCTV inspections, hot water, gas plumbing or renovations when that is the main need.',
			},
			{
				question: 'Do you handle both residential and commercial plumbing?',
				answer:
					'Yes. Residential plumbing and commercial plumbing are both part of our general plumbing services across our service areas.',
			},
			{
				question: 'Can you help if I am not sure what the problem is?',
				answer:
					'Yes. Plumbing fault finding is often the first step. Once the cause is clearer, the work can stay as a general repair or move into a more specific service if needed.',
			},
			{
				question: 'Do you install fixtures as well as repair them?',
				answer:
					'Yes. Plumbing installations and fixture replacements are common general plumbing jobs alongside repairs and maintenance work.',
			},
		],
	},
	{
		slug: 'renovation-plumbing',
		title: 'Renovation Plumbing',
		metaTitle: 'Bathroom & Kitchen Renovation Plumber Adelaide | Water to Waste',
		metaDescription:
			'Renovation plumber for bathrooms, kitchens and laundries across Adelaide Hills, Murray Bridge and metropolitan Adelaide. Fixture installation and pipework alterations. Call 0403 305 133.',
		h1: 'Plumbing for Bathrooms, Kitchens and Laundries',
		intro:
			'Renovation plumbing shapes how a new bathroom, kitchen or laundry will work long after the finishes are installed. Water to Waste Plumbing & Gas Solutions provides renovation plumber Adelaide support for pipework alterations, drainage changes and fixture installation across the Adelaide Hills, Murray Bridge, metropolitan Adelaide, and Totness and surrounding areas.',
		sections: [
			{
				heading: 'Involve a plumber early in the renovation',
				paragraphs: [
					'Layout decisions look simple on a plan until existing pipework, drainage falls and appliance connections are checked. Involving a plumber early in the renovation process helps prevent problems with fixture placement, drainage alterations and installation clearances before walls and joinery are locked in.',
					'Early planning also reduces rework. It is much easier to adjust pipe relocation or shower plumbing details before tiling and cabinetry are complete.',
				],
			},
			{
				heading: 'Bathroom, kitchen and laundry renovation plumbing',
				paragraphs: [
					'Bathroom renovation plumbing, kitchen renovation plumbing and laundry renovation plumbing each have different demands, but all rely on correct supply, drainage and fixture installation.',
				],
				listIntro: 'Renovation plumbing commonly includes:',
				list: [
					'Bathroom renovations',
					'Kitchen renovations',
					'Laundry renovations',
					'Pipework alterations and pipe relocation',
					'Drainage alterations',
					'Tap installation',
					'Toilet installation',
					'Shower plumbing and bath plumbing',
					'Sink and vanity plumbing',
					'Plumbing fixture installation',
					'Appliance plumbing connections',
				],
			},
			{
				heading: 'How renovation plumbing usually progresses',
				paragraphs: [
					'A renovation often starts with understanding the existing layout and what needs to change. That may include assessing current pipe routes, drainage positions and whether drain and pipe locating or further inspection is useful before opening floors or walls.',
					'Rough-in work sets the supply and drainage positions for new fixtures. Fit-off then completes tap installation, toilet installation, shower and vanity connections, and any appliance plumbing connections. Gas plumbing may also be involved where cooktops or gas hot water systems are part of the project.',
				],
			},
			{
				heading: 'Benefits of professional renovation plumbing',
				paragraphs: [
					'Professional renovation plumbing protects the finished result. Correct falls, secure connections and properly planned pipe routes reduce the risk of leaks, odours and awkward fixture placement after the renovation is complete.',
					'For homeowners and builders, clear coordination around bathroom renovation plumbing and kitchen renovation plumbing keeps the project moving with fewer surprises. Hot water services and general plumbing may also form part of the wider upgrade.',
				],
			},
			{
				heading: 'Renovation plumbing across our service areas',
				paragraphs: [
					'We provide renovation plumbing throughout the Adelaide Hills, Murray Bridge and metropolitan Adelaide, including Totness and surrounding areas. If you are planning a bathroom, kitchen or laundry upgrade, call Water to Waste early so plumbing requirements can be considered before the layout is finalised.',
				],
			},
		],
		relatedSlugs: [
			'general-plumbing',
			'drain-pipe-locating',
			'gas-plumbing',
			'hot-water-services',
		],
		faqs: [
			{
				question: 'When should a plumber get involved in a renovation?',
				answer:
					'As early as practical. Involving a renovation plumber before finalising layout helps avoid drainage, pipe relocation and fixture installation problems later in the build.',
			},
			{
				question: 'Do you handle bathroom, kitchen and laundry renovations?',
				answer:
					'Yes. Bathroom renovation plumbing, kitchen renovation plumbing and laundry renovation plumbing are all part of this service, including taps, toilets, showers, vanities and appliance connections.',
			},
			{
				question: 'Can existing pipework be relocated during a renovation?',
				answer:
					'Often yes, depending on the property and design. Pipework alterations and drainage alterations need to be planned against what is already in place and what the new layout requires.',
			},
			{
				question: 'Do renovations ever need drain locating or gas plumbing as well?',
				answer:
					'They can. Drain and pipe locating may help before excavation or major alterations, and gas plumbing may be required for cooktops, gas appliances or gas hot water changes.',
			},
		],
	},
];

export function getServicePage(slug: string): ServicePage | undefined {
	return servicePages.find((page) => page.slug === slug);
}

export function getServiceTitle(slug: string): string {
	return getServicePage(slug)?.title ?? slug;
}
