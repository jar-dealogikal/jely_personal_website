import React from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";

const products = [
	{
		id: 1,
		imageSrc: img2,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img1,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img3,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img4,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img5,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img6,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img7,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img8,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img9,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img10,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img11,
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		imageSrc: img12,
		imageAlt: "Front of men's Basic Tee in black.",
	},

	// More products...
];

const ParallaxSection = ({ children, className }) => {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.section>
	);
};

export default function Example() {
	return (
		<ParallaxSection>
			<section id="photos">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-5xl font-mono py-5 font-bold tracking-tight bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
						Gallery
					</h2>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<div key={product.id} className="group relative">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</ParallaxSection>
	);
}
