"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import "@fontsource/sora";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaStar } from 'react-icons/fa';
import Image from "next/image";
import { motion } from "framer-motion";
import styles from './about.module.css';
import { usePathname } from "next/navigation";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

export default function About() {

    const [isSticky, setIsSticky] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const pathname = usePathname(); // Get the current route

    const CustomIcon1 = "/images/set.png"; // ✅ No import needed
    const CustomIcon2 = "/images/sun.png"; // ✅ No import needed
    const CustomIcon3 = "/images/link.png"; // ✅ No import needed
    const CustomIcon4 = "/images/ah.png"; // ✅ No import needed


    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / windowHeight) * 100;
            setScrollProgress(progress);

            // Show button only when scrolling down OR up, hide at the top
            setShowButton(scrollTop > 100);
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Hide button immediately after clicking
        setTimeout(() => setShowButton(false), 500);
    };



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show sticky header after scrolling past 350px
            if (currentScrollY > 350 && !isSticky && !isHiding) {
                setIsSticky(true);
            }
            // Hide sticky header when scrolling back to within 350px
            else if (currentScrollY <= 350 && isSticky) {
                setIsHiding(true);
                setTimeout(() => {
                    setIsSticky(false); // Remove sticky state after animation
                    setIsHiding(false); // Reset hiding state
                }, 500); // Match this duration with the CSS animation timing
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky, isHiding]);

    const [displayedText, setDisplayedText] = useState("");
    const fullText = "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, and connecting with customers.";

    useEffect(() => {
        let index = 0;
        let typingInterval: NodeJS.Timeout;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (index < fullText.length) {
                    setDisplayedText(fullText.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(typingInterval);

                    // Reset index and clear text, then restart typing after a delay
                    setTimeout(() => {
                        index = 0;
                        setDisplayedText("");
                        startTyping();
                    }, 1000); // Delay before restarting (1 second in this case)
                }
            }, 50); // Typing speed in milliseconds
        };

        startTyping();

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, []);


    const [showStickyHeader, setShowStickyHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Increased threshold
                setShowStickyHeader(true);
            } else {
                setShowStickyHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const projectss = [
        {
            company: "Our Mission",
            service: "To empower industries with cutting-edge technology, creating seamless, innovative solutions that drive progress and unlock potential.",
            image: "/images/1.png",
            link: "/portfolio/neonverse",
        },
        {
            company: "Our Vision",
            service: "To become the global leader in transformative technology, pioneering the future with a focus on sustainability, intelligence, and human potential.",
            image: "/images/4.png",
            link: "/portfolio/warpdrive",
        },
        {
            company: "Core Values",
            service: "We are committed to innovative, ethical, and collaborative solutions that foster sustainability and shape a better future for society and the planet.",
            image: "/images/5.png",
            link: "/portfolio/synthwave",
        },
    ];

    const stats = [
        { value: 6, label: "Years of Excellence", icon: CustomIcon1 },
        { value: 80, label: "Happy Clients", icon: CustomIcon2 },
        { value: 200, label: "Total Projects", icon: CustomIcon3 },
        { value: 100, label: "Live Projects", icon: CustomIcon4 },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Scroll-based Dynamic Shadow Effect (Fixed)
    const [shadowOffset, setShadowOffset] = useState(0);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                setShadowOffset(Math.min(window.scrollY * 0.1, 20)); // Prevents excessive offset
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className={styles.homepages}>
                <header className="mobile-header">
                    <div className="header-container">
                        {/* Logo */}
                        <img src="/images/logs.png" alt="Lionheart Tech Logo" width={90} height={90} />

                        {/* Hamburger Icon */}
                        <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                null
                            ) : (
                                <Bars3Icon className="h-8 w-8 text-[black] transition-transform duration-600 rotate-0" />
                            )}
                        </div>
                    </div>

                    {showStickyHeader && (
                        <header className="sticky-header">
                            <div className="header-container">
                                <img src="/images/logs.png" alt="Lionheart Tech Logo" width={80} height={80} />
                                <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                                    <Bars3Icon className="h-8 w-8 text-[black]" />
                                </div>
                            </div>
                        </header>
                    )}

                    {/* Mobile Menu */}
                    <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                        <div className="close-icon" onClick={() => setMenuOpen(false)}>
                            <XMarkIcon className="h-8 w-8 text-[black] transition-transform duration-600 rotate-90" />
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <button>
                                <FaStar style={{ fontSize: "24px", color: "blue" }} />
                            </button>
                        </div>
                        <ul>
                            <li>
                                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li>
                                <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <header
                    className={`flex justify-between items-center px-6 py-4 ${isSticky ? (isHiding ? "header-sticky hide" : "header-sticky") : "header-custom"
                        }`}
                    style={{ height: "80px" }}
                >
                    {/* Logo */}
                    <img src="/images/logs.png"
                        alt="Lionheart Tech Logo"
                        width={100}
                        height={100}
                        className="logo-image"
                    />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="/"
                            className={`${pathname === "/" ? "font-bold border-b-2 border-blue-500 text-blue-500" : ""
                                } ${isSticky ? "text-black" : "text-white"} hover:text-blue-300 transition`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`${pathname === "/about" ? "font-bold border-b-2 border-blue-500 text-blue-500" : ""
                                } ${isSticky ? "text-black" : "text-white"} hover:text-blue-300 transition`}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className={`${pathname === "/services" ? "font-bold border-b-2 border-blue-500 text-blue-500" : ""
                                } ${isSticky ? "text-black" : "text-white"} hover:text-blue-300 transition`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className={`${pathname === "/contact" ? "font-bold border-b-2 border-blue-500 text-blue-500" : ""
                                } ${isSticky ? "text-black" : "text-white"} hover:text-blue-300 transition`}
                        >
                            Contact
                        </Link>
                    </nav>
                    {/* Call-to-Action Button */}

                    <button className="custom-button">Get in Touch</button>
                </header>

                <section className="relative w-screen min-h-[60vh] bg-gradient-to-r from-black via-blue-600 to-black flex items-center justify-center px-6 mt-20" >
                    <div className="text-center text-white max-w-3xl">
                        <h1 className="text-5xl font-bold drop-shadow-lg">About Us</h1>
                        <p className="mt-4 text-lg text-gray-200">
                            Since 2015, we’ve helped 50+ companies scale through technology and creativity.
                            We’re on a mission to build solutions that drive real impact.
                        </p>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image className="rotate-image" src="/images/link.png" alt="lIonheart Tech" width={400} height={400} />
                    </div>
                </section>
            </div>

            <section className="galaxy" style={{ marginTop: "-60px" }} >
                {/* GALACTIC BACKGROUND ANIMATION */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-20">
                        <source src="/path/to/your/video.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* LIGHT TRAILS ANIMATION */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 blur-3xl opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 blur-2xl opacity-60 animate-spin"></div>
                </div>

                <motion.h2
                    className="text-6xl font-extrabold mb-6 tracking-wide glitch-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, textShadow: "0px 0px 20px cyan" }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/images/d3.png"
                        alt="3D Rocket"
                        className="inline-block w-24 h-24 rotate"
                    />
                    WELCOME TO THE FUTURE
                </motion.h2>

                <p className="text-lg text-gray-300 mb-12">We build experiences beyond your imagination!!</p>

                {/* HIGH-TECH PROJECT SHOWCASE */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
                    {projectss.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-900 p-6 rounded-xl shadow-xl transform hover:scale-110 transition duration-500 hover:shadow-neon"
                            whileHover={{ scale: 1.15, rotate: 2 }}
                        >
                            {/* HOLOGRAPHIC FLOATING CARD */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 blur-lg -z-10"></div>

                            <div className="flex justify-center">
                                <Image src={project.image} alt={project.company} width={100} height={50} className="rounded-lg" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-white mb-4 neon-glow">{project.company}</h3>
                            <p className="text-white-400 font-medium">{project.service}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 🚀 ROCKET-LAUNCH CTA BUTTON */}
                <motion.div
                    className="mt-16 relative inline-block"
                    whileHover={{ y: -10, boxShadow: "0px 0px 20px lime" }}
                    whileTap={{ scale: 0.9, y: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-4xl font-extrabold text-white tracking-wider neon-glow">
                        READY TO LAUNCH?!
                        <img
                            src="/images/34.png"  // Path to your 3D rocket image
                            alt="3D Rocket"
                            className="inline-block w-24 h-24 transform rotate-12 rocket-animation"
                        />
                    </h3>
                    <p className="text-lg text-gray-400 mt-2">Let's build beyond limits!!</p>
                    <Link href="/about" legacyBehavior>
                        <a className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-110 transition rocket-hover">
                            Get in Touch →
                        </a>
                    </Link>
                </motion.div>
            </section>


            {/* 🔹 Company History */}
            <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-sora text-center text-gray-800">Our Journey</h2>
                    <div className="mt-12 flex flex-col md:grid md:grid-cols-2 gap-8">
                        {/* 🏆 Founded in 2015 */}
                        <div className="p-6 shadow-lg rounded-xl bg-white border-l-4 border-blue-500 hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                Founded in 2015
                            </h3>
                            <p className="mt-3 text-gray-700 md:text-lg">
                                Started with a vision to empower businesses through technology.
                            </p>
                        </div>

                        {/* 🌍 Expanding Globally */}
                        <div className="p-6 shadow-lg rounded-xl bg-white border-l-4 border-indigo-500 hover:scale-105 transition-transform">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                Expanding Globally
                            </h3>
                            <p className="mt-3 text-gray-700 md:text-lg">
                                We have worked with 100+ clients worldwide and continue to grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Trusted by 100+ Companies */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                        Trusted by 100+ Companies
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        We are proud to have partnered with industry-leading businesses across the globe.
                    </p>

                    {/* Logos Grid */}
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                        <img src="/logos/google.svg" alt="Google" className="h-12 grayscale hover:grayscale-0 transition" />
                        <img src="/logos/microsoft.svg" alt="Microsoft" className="h-12 grayscale hover:grayscale-0 transition" />
                        <img src="/logos/spotify.svg" alt="Spotify" className="h-12 grayscale hover:grayscale-0 transition" />
                        <img src="/logos/airbnb.svg" alt="Airbnb" className="h-12 grayscale hover:grayscale-0 transition" />
                        <img src="/logos/shopify.svg" alt="Shopify" className="h-12 grayscale hover:grayscale-0 transition" />
                    </div>
                </div>
            </section>

            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative bg-black text-white py-20 px-6 overflow-hidden"
            >
                {/* 🔥 Moving Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-900/20 blur-[180px] opacity-50 animate-gradientFlow"></div>

                {/* Section Title */}
                <div className="text-center mb-12 relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-lg font-semibold tracking-widest text-gray-400"
                    >
                        — ABOUT LIONHEART TECH —
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-6xl font-extrabold tracking-wide mt-3 drop-shadow-lg text-blue-400 hover:text-white transition-all duration-300 hover:shadow-[0px_0px_40px_rgba(0,255,255,0.6)]"
                    >
                        OUR SUCCESS 🦁🔥
                    </motion.h1>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto relative z-10">
                    {stats.map((stat, index) => (
                        <Tilt
                            key={index}
                            glareEnable={true}
                            glareMaxOpacity={0.5}
                            glareColor="cyan"
                            glarePosition="top"
                            scale={1.1}
                            className="relative"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}} // ✅ Fixed Syntax Issue
                                transition={{ delay: 0.3 + index * 0.3, duration: 1, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 2, -2, 0],
                                    boxShadow: `0px 4px ${shadowOffset}px rgba(0, 255, 255, 0.5)`,
                                }}
                                className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg flex flex-col items-center w-64 text-center border border-blue-400/40 transition-all transform hover:shadow-2xl hover:scale-105"
                            >
                                {/* 💡 Live Reflection Effect */}
                                <div className="absolute -inset-1.5 bg-blue-500/10 rounded-3xl blur-md opacity-50"></div>

                                {/* 🔥 Icon Animation */}
                                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} className="w-16 h-16 mb-3">
                                    {typeof stat.icon === "string" ? (
                                        <img src={stat.icon} alt={stat.label} className="w-full h-full object-contain" />
                                    ) : (
                                        <Image src={stat.icon} alt={stat.label} width={64} height={64} className="object-contain" />
                                    )}
                                </motion.div>


                                {/* 🚀 Animated CountUp Numbers */}
                                <h2 className="text-4xl font-bold mt-3 text-blue-300">
                                    {isInView ? <CountUp end={stat.value} duration={10} delay={0.5} /> : "0"}+
                                </h2>

                                {/* 🌊 Animated Progress Bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: "100%" } : {}}
                                    transition={{ duration: 10, ease: "easeOut", delay: 0.5 }}
                                    className="h-1 bg-blue-500 rounded-full w-full mt-2"
                                ></motion.div>

                                <p className="text-lg opacity-75 mt-3">{stat.label}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                {/* 🌌 Floating Animated Particles */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute w-10 h-10 bg-blue-400 rounded-full blur-2xl top-[10%] left-[20%] opacity-30 animate-bounce"></div>
                    <div className="absolute w-14 h-14 bg-cyan-500 rounded-full blur-3xl top-[50%] left-[60%] opacity-20 animate-pulse"></div>
                    <div className="absolute w-16 h-16 bg-purple-500 rounded-full blur-3xl top-[80%] left-[10%] opacity-20 animate-spin"></div>
                </div>

                {/* 🔥 Animated Liquid Morph Shapes */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-blue-500/30 via-transparent to-blue-900/30 blur-3xl animate-morph"></div>
            </motion.section>

            {/* 🔹 Meet the Team */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-sora text-gray-800">Meet Our Team</h2>
                    <p className="mt-4 text-gray-600">A passionate team of experts dedicated to innovation.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/150" },
                            { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/150" },
                            { name: "Mike Johnson", role: "Head of Design", img: "https://via.placeholder.com/150" }
                        ].map((member, index) => (
                            <div key={index} className="p-6 shadow-md rounded-lg bg-white text-center">
                                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full" />
                                <h3 className="mt-4 text-xl font-sora">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Call to Action */}
            <section className="text-white py-16 text-center" style={{ background: 'linear-gradient(to right, black, blue, black)' }}>
                <h2 className="text-3xl font-sora">Join Our Journey</h2>
                <p className="mt-4 text-gray-300">Want to work with us? Let's build something great together.</p>
                <a href="/contact" className="mt-6 inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-sora transition hover:bg-gray-200">
                    Contact Us
                </a>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-12 px-6 md:px-16 lg:px-24 border-t border-gray-200 dark:border-gray-800 font-sora text-center md:text-left transition-colors duration-300">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                            LIONHEART TECH<span className="text-blue-600 dark:text-blue-400">.</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">Empowering businesses with cutting-edge technology.</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">Accra, GH</p>

                        {/* Certifications */}
                        <div className="flex justify-center md:justify-start gap-3 mt-4">
                            <img src="/images/logs.png" alt="Certifications" className="w-24 h-24" />
                        </div>
                    </div>


                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 dark:text-gray-300">
                        {[
                            { title: "Solutions", links: ["AI Solutions", "Cybersecurity", "Cloud Services", "Enterprise IT"], paths: ["/ai-solutions", "/cybersecurity", "/cloud-services", "/enterprise-it"] },
                            { title: "Resources", links: ["Blog", "Case Studies", "Whitepapers", "Webinars"], paths: ["/blog", "/case-studies", "/whitepapers", "/webinars"] },
                            { title: "Company", links: ["About Us", "Careers", "Contact", "Partnerships"], paths: ["/about", "/careers", "/contact", "/partnerships"] },
                            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"], paths: ["/privacy-policy", "/terms-of-service", "/cookie-policy", "/security"] }
                        ].map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-black dark:text-white">{section.title}</h3>
                                <ul className="mt-2 space-y-2">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href={section.paths[idx]} className="relative hover:text-blue-600 dark:hover:text-blue-400 transition group">
                                                {link}
                                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                    {/* Social Icons */}
                    <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-3 mt-6 md:mt-0">
                        {[
                            { icon: FaXTwitter, href: "https://twitter.com/LionheartTech" },
                            { icon: FaLinkedin, href: "https://linkedin.com/company/lionheart-tech" },
                            { icon: FaInstagram, href: "https://instagram.com/lionheart.tech" }
                        ].map(({ icon: Icon, href }, index) => (
                            <Link
                                key={index}
                                href={href}
                                target="_blank"
                                className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full 
                 hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                            >
                                <Icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>



                {/* Newsletter Subscription */}
                <div className="mt-8 text-center relative w-full max-w-md mx-auto">
                    <h3 className="font-semibold text-black mb-2">Stay Updated</h3>
                    <div className="relative w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-4 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-36 text-gray-700"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1 bottom-1 px-6 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>

                <p className="text-gray-500 text-sm mt-2">&copy; {new Date().getFullYear()} Lionheart Tech. All rights reserved.</p>
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all z-50 
        ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}
        bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
      `}
                >
                    {/* Circular Progress Ring */}
                    <svg width="50" height="50" viewBox="0 0 100 100" className="rotate-[-90deg]">
                        <circle cx="50" cy="50" r="40" stroke="#ddd" strokeWidth="8" fill="none" />
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="white"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset={`${251.2 - (scrollProgress / 100) * 251.2}`}
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Up Arrow */}
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                        ↑
                    </span>
                </button>
            </footer>
        </div>
    );
}