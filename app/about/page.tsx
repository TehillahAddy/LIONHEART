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




export default function About() {
    const [isSticky, setIsSticky] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);

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


    return (
        <div className="bg-gray-100 min-h-screen">
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
                    className={`flex justify-between items-center ${isSticky ? (isHiding ? "header-sticky hide" : "header-sticky") : "header-custom"
                        }`}
                    style={{ height: "80px" }} // Constrain the header height
                >
                    {/* Logo */}
                    <img src="/images/logs.png"
                        alt="Lionheart Tech Logo"
                        width={100}
                        height={100}
                        className="logo-image"
                    />

                    {/* Desktop Navigation */}
                    <nav className="desktop-menu flex gap-6">
                        <Link href="/" className="hover">Home</Link>
                        <Link href="/about" className="hover">About</Link>
                        <Link href="/services" className="hover">Services</Link>
                        <Link href="/contact" className="hover">Contact</Link>
                    </nav>

                    {/* Call-to-Action Button */}
                    <button className="custom-button">Get in Touch</button>
                </header>
            </div>

            <section className="galaxy" style={{ marginTop: "-60px" }} >
                <div className="header-container">
                    {/* Logo */}
                    <img src="/images/logs.png" alt="Lionheart Tech Logo" width={90} height={90} />

                    {/* Hamburger Icon */}
                    
                    <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            null
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-red-500 transition-transform duration-600 rotate-0" />
                        )}
                    </div>
                </div>

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
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-sora text-center text-gray-800">Our Journey</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 shadow-md rounded-lg bg-gray-50">
                            <h3 className="text-xl font-sora">Founded in 2015</h3>
                            <p className="mt-2 text-gray-600">Started with a vision to empower businesses through technology.</p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg bg-gray-50">
                            <h3 className="text-xl font-sora">Expanding Globally</h3>
                            <p className="mt-2 text-gray-600">We have worked with 100+ clients worldwide and continue to grow.</p>
                        </div>
                    </div>
                </div>
            </section>

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
            <section className="bg-blue-900 text-white py-16 text-center">
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