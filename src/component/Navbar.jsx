"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../images/logo.jpg";
import React from "react";
import { motion } from "framer-motion";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Blogs", href: "#blog" },
	{ name: "Gallery", href: "#photos" },
	{ name: "Contact", href: "#contact" },
];

export default function HeroSection() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				id="/#"
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex items-center gap-x-12">
					<motion.a
						initial={{ x: -200 }}
						animate={{ x: 0 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						href="/#"
						className="-m-1.5 p-1.5"
					>
						<span className="sr-only">Your Company</span>
						<img alt="" src={logo} className="h-10 rounded-full w-auto" />
					</motion.a>
					<motion.div
						className="hidden lg:flex lg:gap-x-12"
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
						{navigation.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-gray-900 hover:bg-[#e126fe] hover:text-white px-4 py-1 rounded-full"
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								{item.name}
							</motion.a>
						))}
					</motion.div>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img alt="" src="logo" className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<motion.div
								className="space-y-2 py-6"
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
								{navigation.map((item) => (
									<motion.a
										variants={{
											hidden: { opacity: 0, y: 20 },
											visible: { opacity: 1, y: 0 },
										}}
										transition={{ duration: 0.6, ease: "easeOut" }}
										key={item.name}
										href={item.href}
										className="-mx-3 block text-base font-semibold leading-7 text-gray-900 hover:bg-[#e126fe] hover:text-white px-4 py-1 rounded-full"
									>
										{item.name}
									</motion.a>
								))}
							</motion.div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
