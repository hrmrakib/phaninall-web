import { useState } from 'react';
import Masonry from 'react-masonry-css';

const services = [
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description:
			'Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs.',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description:
			'Specializes in planning and designing integrated computer systems to meet client business requirements.',
	},
	{
		code: '541513',
		title: 'Computer Facilities Management Services',
		description:
			'Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.Provides on-site and remote management of computer systems and data processing facilities for clients.',
	},
	{
		code: '541519',
		title: 'Other Computer-Related Services',
		description:
			'Covers all other IT-related services, including cloud services, cybersecurity, and IT consulting.',
	},
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description:
			'Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs.',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description:
			'Specializes in planning and designing integrated computer systems to meet client business requirements.',
	},
	{
		code: '541513',
		title: 'Computer Facilities Management Services',
		description:
			'Provides on-site and remote management of computer systems and data processing facilities for clients.',
	},
	{
		code: '541519',
		title: 'Other Computer-Related Services',
		description:
			'Covers all other IT-related services, including cloud services, cybersecurity, and IT consulting.',
	},
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description:
			'Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs.',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description:
			'Specializes in planning and designing integrated computer systems to meet client business requirements.',
	},
	{
		code: '541513',
		title: 'Computer Facilities Management Services',
		description:
			'Provides on-site and remote management of computer systems and data processing facilities for clients.',
	},
	{
		code: '541519',
		title: 'Other Computer-Related Services',
		description:
			'Covers all other IT-related services, including cloud services, cybersecurity, and IT consulting.',
	},
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description:
			'Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs.',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description:
			'Specializes in planning and designing integrated computer systems to meet client business requirements.',
	},
	{
		code: '541513',
		title: 'Computer Facilities Management Services',
		description:
			'Provides on-site and remote management of computer systems and data processing facilities for clients.',
	},
	{
		code: '541519',
		title: 'Other Computer-Related Services',
		description:
			'Covers all other IT-related services, including cloud services, cybersecurity, and IT consulting.',
	},
];

export default function NaicsCodes() {
	return (
		<div className="m-[40px] p-[40px]">
			<div className="w-full pt-[40px] pb-[3px] bg-[#FFF0E5] rounded-3xl">
				<h2 className="text-center text-[32px] font-bold text-[#FF6C0A] mb-[40px]">
					NAICS Codes
					<div className="w-[60px] border-t-2 border-black mx-auto"></div>
				</h2>
				<div className="m-[40px]">
					<Masonry
						breakpointCols={{
							default: 4,
							1100: 3,
							700: 2,
							500: 1,
						}}
						className="flex gap-[17px]"
						columnClassName="bg-clip-padding"
					>
						{services.map((service) => (
							<CodeService
								key={service.code}
								service={service}
							/>
						))}
					</Masonry>
				</div>
			</div>
		</div>
	);
}

function CodeService({ service }: any) {
	const { code, description } = service;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className="w-full p-[20px] mb-[17px] bg-white border-red-300 border rounded-4xl"
		>
			<div className="text-center">
				<div className={`${isOpen ? 'bg-[#FFF0E5]' : 'hover:p-[8px]'}`}>
					<p className="border-b border-black mx-[5px]">Codes</p>
					<p>{code}</p>
				</div>

				{isOpen && <p className="mt-[20px]">{description}</p>}
			</div>
		</div>
	);
}
