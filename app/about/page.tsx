"use client";

import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import "@fontsource/sora"; 



export default function About() {
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
            <footer className="bg-white py-12 px-6 md:px-16 lg:px-24 border-t border-gray-200 font-sora text-center md:text-left">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-sora text-black">
                            LIONHEART TECH<span className="text-blue-600">.</span>
                        </h2>
                        <p className="text-gray-600 mt-2">Empowering businesses with cutting-edge technology.</p>
                        <p className="text-gray-600 mt-1">Accra, GH</p>
                        {/* Certifications */}
                        <div className="flex gap-3 mt-4">
                            <img src="/images/logs.png" alt="SOC 2" className="w-24 h-24" />
                        </div>
                        <p className="text-gray-500 text-sm mt-2"> &copy; {new Date().getFullYear()} Lionheart Tech. All rights reserved.</p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
                        <div>
                            <h3 className="font-sora text-black">Solutions</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/ai-solutions" className="hover:text-blue-600 transition">AI Solutions</Link></li>
                                <li><Link href="/cybersecurity" className="hover:text-blue-600 transition">Cybersecurity</Link></li>
                                <li><Link href="/cloud-services" className="hover:text-blue-600 transition">Cloud Services</Link></li>
                                <li><Link href="/enterprise-it" className="hover:text-blue-600 transition">Enterprise IT</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-sora text-black">Resources</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
                                <li><Link href="/case-studies" className="hover:text-blue-600 transition">Case Studies</Link></li>
                                <li><Link href="/whitepapers" className="hover:text-blue-600 transition">Whitepapers</Link></li>
                                <li><Link href="/webinars" className="hover:text-blue-600 transition">Webinars</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-sora text-black">Company</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-blue-600 transition">Careers</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                                <li><Link href="/partnerships" className="hover:text-blue-600 transition">Partnerships</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-sora text-black">Legal</h3>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="hover:text-blue-600 transition">Terms of Service</Link></li>
                                <li><Link href="/cookie-policy" className="hover:text-blue-600 transition">Cookie Policy</Link></li>
                                <li><Link href="/security" className="hover:text-blue-600 transition">Security</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center gap-3">
                        <Link href="https://twitter.com/LionheartTech" target="_blank" className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition">
                            <FaXTwitter size={20} />
                        </Link>
                        <Link href="https://linkedin.com/company/lionheart-tech" target="_blank" className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="https://instagram.com/lionheart.tech" target="_blank" className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition">
                            <FaInstagram size={20} />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
