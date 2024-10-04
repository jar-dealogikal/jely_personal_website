import React, { useEffect, useRef, useState } from "react";
import img2 from "../images/img2.jpg";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const socialLinks = [
	{
		href: "https://www.facebook.com/profile.php?id=100007283655288&_rdc=1&_rdr",
		icon: FaFacebook,
		color: "text-[#e126fe] hover:text-pink-500",
		label: "Facebook",
	},
	{
		href: "https://www.instagram.com/jelylariosa/?fbclid=IwY2xjawFplzlleHRuA2FlbQIxMAABHYKOEUv4ZV_1QRKFQv8NCQKa9VD12CpQfshnpNgIhzibtsmEmTh0ZpN-9w_aem_zLUlL1HqACqtOaL93Nr0vQ",
		icon: FaInstagram,
		color: "text-[#e126fe] hover:text-pink-400",
		label: "Instagram",
	},
	{
		href: "mailto:lariosaenjely@gmail.com",
		icon: FaEnvelope,
		color: "text-[#e126fe] hover:text-pink-500",
		label: "Email",
	},
];

function TypingEffect({ text, speed = 100 }) {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index]);
				setIndex(index + 1);
			}, speed);
			return () => clearTimeout(timeout);
		}
	}, [index, text, speed]);

	return (
		<motion.h1
			className="mt-24 text-4xl text-center  font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2, ease: "easeIn", delay: 1.2 }}
		>
			{displayedText}
		</motion.h1>
	);
}

const HeroSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<div
			ref={ref}
			className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8"
		>
			<div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-40 xl:col-span-6">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<TypingEffect text="WELCOME TO MY PERSONAL WEBSITE" />
					{/* <h1 className="mt-24 text-4xl text-center  font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
					
					</h1> */}
					<motion.p
						className="mt-6 text-lg leading-8 text-gray-600"
						initial={{ opacity: 0, x: -100 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
					>
						Hi, I am Enjely Lariosa, A kind of person who is quiet in large
						group or in public. I am typically sensitive to noise yet I enjoy
						being alone. You only see the real me if we're close, I'm also a
						hardworking independent woman.
					</motion.p>
					<motion.div
						className="mt-10 flex items-center gap-x-6"
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									staggerChildren: 0.3, // Delay each child by 0.3s
								},
							},
						}}
					>
						{socialLinks.map((link, index) => {
							const Icon = link.icon;
							return (
								<motion.a
									key={index}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer"
									aria-label={link.label}
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0 },
									}}
									transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
								>
									<Icon className={`h-7 w-7 ${link.color}`} />
								</motion.a>
							);
						})}
					</motion.div>
				</div>
			</div>
			<motion.div
				className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
				initial={{ opacity: 0, x: 100 }}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
			>
				<img
					alt=""
					src={img2}
					className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				/>
			</motion.div>
		</div>
	);
};

export default HeroSection;
