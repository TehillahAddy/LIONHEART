"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaStar } from 'react-icons/fa';
import Logs from "../public/images/logs.png";
import "@fontsource/sora";
import styles from './contact.module.css';
import {
    Monitor, PenTool, Server, TrendingUp, Smartphone, Search, ClipboardList, ShieldCheck, FileText
} from "lucide-react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";




export default function Contact() {

    const [scrollProgress, setScrollProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // Get the current route

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

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("");
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(`❌ ${result.error || "Failed to send message"}`);
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("❌ Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
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


    return (
        <div className="bg-gray-50 min-h-screen">
            <div className={styles.homepa}>
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

                <section className="relative w-screen min-h-[60vh] bg-gradient-to-r from-black via-blue-600 to-black flex items-center justify-center px-6 mt-20">
                    <div className="text-center text-white max-w-3xl">
                        <h1 className="text-5xl font-bold drop-shadow-lg">Contact Us</h1>
                        <p className="mt-4 text-lg text-gray-200">
                            Let’s collaborate and build something amazing together! Reach out to us for inquiries, partnerships, or just to say hi. 🚀
                        </p>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image className="rotate-image" src="/images/pi.png" alt="lIonheart Tech" width={300} height={300} />
                    </div>
                </section>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black text-white"
            >
                {/* 🌟 Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-10">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3">
                        <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg whitespace-nowrap">
                            Get in Touch
                        </h1>
                        <p className="mt-2 text-lg text-gray-300 text-center">
                            We'd love to hear from you!
                        </p>

                    </div>

                    {/* Right: Image */}
                    <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
                        <img
                            src="/images/co (5).png"
                            alt="Get in Touch"
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
            {/* 📍 Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 bg-white shadow-2xl rounded-3xl p-8 mb-8 md:mb-0 md:mr-8 backdrop-blur-lg bg-opacity-90"
            >
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Information</h2>

                {/* Address */}
                <div className="flex items-start space-x-4 mb-6">
                    <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">Greater Accra Region - Oyarifa</p>
                        <p className="text-gray-600">Western Region - Wassa East District</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 mb-6">
                    <FaEnvelope className="text-blue-500 text-2xl mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">info@lionhearteach.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                    <FaPhone className="text-blue-500 text-2xl mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+233552012116</p>
                        <p className="text-gray-600">+233278985082</p>
                        <p className="text-gray-600">+233277688148</p>
                    </div>
                </div>
            </motion.div>

            {/* 📩 Contact Form */}
            <motion.form
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                onSubmit={handleSubmit}
                className="w-full md:w-1/2 bg-white shadow-2xl rounded-3xl p-8 backdrop-blur-lg bg-opacity-90"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us A Message</h2>

                <div className="mb-4">
                    <label className="block text-gray-600">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 shadow-inner"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 shadow-inner"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600">Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 shadow-inner"
                        required
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
                >
                    Send Message 🚀
                </motion.button>

                {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
            </motion.form>
        </div>
            </motion.section>

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

