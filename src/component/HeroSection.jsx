import React from "react";
import img2 from "../images/img2.jpg";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
	return (
		<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
			<div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-40 xl:col-span-6">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="mt-24 text-4xl text-center  font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
						WELCOME TO MY PERSONAL WEBSITE
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Hi, I am Enjely Lariosa, A kind of person who is quiet in large
						group or in public. I am typically sensitive to noise yet I enjoy
						being alone. You only see the real me if we're close, I'm also a
						hardworking independent woman.
					</p>
					<div className="mt-10 flex items-center gap-x-6">
						<a
							href="https://www.facebook.com/profile.php?id=100007283655288&_rdc=1&_rdr"
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-pointer"
						>
							<FaFacebook className="h-7 w-7 text-[#e126fe] hover:text-pink-500" />
						</a>
						<a
							href="https://www.instagram.com/janmaaku14/"
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-pointer "
						>
							<FaInstagram className="h-7 w-7 text-[#e126fe] hover:text-pink-400" />
						</a>
						<a
							href="mailto:janmaakurubio14@gmail.com"
							className="cursor-pointer"
						>
							<FaEnvelope className="h-7 w-7 text-[#e126fe] hover:text-pink-500" />
						</a>
					</div>
				</div>
			</div>
			<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
				<img
					alt=""
					src={img2}
					className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
