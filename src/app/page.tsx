'use client';

import AboutUs from '@/components/home/AboutSection';
import Hero from '@/components/home/Hero';
import CodesDisplay from '@/components/home/CodesDisplay';
import OurService from '@/components/home/OurService';
import ContactUs from '@/components/share/ContactUs';
import NaicsCodes from '@/components/home/NaicsCodes';
export default function Home() {
	return (
		<div className="min-h- flex flex-col">
			<main className="flex-1">
				<Hero />

				<AboutUs />

				<CodesDisplay />
				<NaicsCodes />

				<OurService />

				<ContactUs />

				{/* <div className='h-[70px] md:h-[140px] bg-[#FFFFFF]'></div> */}
			</main>
		</div>
	);
}
