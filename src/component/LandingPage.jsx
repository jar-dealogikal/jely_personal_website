import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import BlogPost from "./BlogPost";
import Photos from "./Photos";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<BlogPost />
			<Photos />
		</>
	);
};

export default LandingPage;
