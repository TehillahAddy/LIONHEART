"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import "@fontsource/sora";



export default function About() {

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
    
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-sora">About Us</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        We are committed to innovation and excellence, helping businesses grow through technology.
                    </p>
                </div>
            </section>

            {/* 🔹 Mission & Values */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-sora text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-gray-600">
                        Our mission is to deliver high-quality, scalable, and secure solutions that transform businesses.
                    </p>
                </div>
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
