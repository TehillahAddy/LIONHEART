"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from 'next/image';





export default function Services() {

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

    const services = [
        { title: "Web Development", description: "Creating stunning and responsive websites tailored to your needs.", icon: "🌐" },
        { title: "Mobile Apps", description: "Building intuitive mobile applications for iOS and Android.", icon: "📱" },
        { title: "Digital Marketing", description: "Helping brands grow with data-driven marketing strategies.", icon: "📈" },
        { title: "Cloud Solutions", description: "Scalable and secure cloud computing for businesses.", icon: "☁️" },
        { title: "UI/UX Design", description: "Designing seamless and user-friendly experiences.", icon: "🎨" },
        { title: "IT Consulting", description: "Providing expert guidance for digital transformation.", icon: "💡" },
    ];

    const benefits = [
        { title: "Expert Team", description: "Our team consists of industry experts dedicated to delivering the best results." },
        { title: "Cutting-Edge Technology", description: "We use the latest tools and technologies to ensure innovation in every project." },
        { title: "Client-Centric Approach", description: "We focus on understanding and fulfilling your unique business needs." },
    ];

    const plans = [
        {
          name: "Starter",
          price: "GHC 800.00 / Project",
          features: ["2D Logo", "1 Flyer Design", "1 Mockup Design"],
          icon: "/images/co (7).png",
        },
        {
          name: "Smart",
          price: "GHC 1500.00 / Project",
          features: ["3D Logo", "2 Flyer Designs", "2 Mockup Designs"],
          icon: "/images/co (8).png",
        },
        {
          name: "Pro",
          price: "GHC 2000.00 / Project",
          features: ["3D Logo", "3 Flyer Designs", "3 Mockup Designs", "2 Motion Designs"],
          icon: "/images/co (2).png",
        },
        {
          name: "Website Packages",
          price: "GHC 5000.00 / Project",
          features: ["Domain Name", "Hosting", "SSL Certificate"],
          icon: "/images/co (1).png",
        },
        {
          name: "Database System Packages",
          price: "Negotiable",
          features: ["Mobile", "Web", "Desktop"],
          icon: "/images/co (6).png",
        },
        {
          name: "Mobile App",
          price: "Negotiable",
          features: ["Web", "Data Collection", "E-Commerce"],
          icon: "/images/co (3).png",
        },
      ];

      const pricingVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
        visible: (i: number) => ({
          opacity: 1,
          scale: 1,
          rotateX: 0,
          transition: { delay: i * 0.15, type: "spring", stiffness: 100, damping: 10 },
        }),
      };
    

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-gradient-to-r from-black via-blue-600 to-black flex items-center justify-center px-6">
                <div className="text-center text-white max-w-3xl">
                    <h1 className="text-5xl font-bold drop-shadow-lg">Our Services</h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Empowering businesses with cutting-edge solutions to drive growth and success.
                    </p>
                </div>
            </section>



            <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="py-16 bg-cover bg-center bg-no-repeat text-gray-900 dark:text-white"
        style={{ backgroundImage: "url('/images/pnd.jpg')" }} // Change to your actual image path
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-900 dark:from-gray-200 dark:to-blue-300 mb-6">
            Affordable Pricing Plan For Your Business
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Choose a plan that fits your needs and scale with ease.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={pricingVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                className="relative p-8 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg bg-cover bg-center bg-no-repeat backdrop-blur-lg group overflow-hidden transition-all"
                style={{ backgroundImage: "url('/images/l.avif')" }} // Change to your actual image path
              >
                <div className="absolute inset-0 w-full h-full border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-300"></div>

                <div className="mb-4 flex justify-center">
                  <Image src={plan.icon} alt={plan.name} width={50} height={50} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4 group-hover:text-blue-500 transition-all">
                  {plan.name}
                </h3>

                <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-300 mb-4">
                  {plan.price}
                </p>

                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="mt-6"
                >
                  <Link href="/contact" legacyBehavior>
                    <a className="inline-block bg-gradient-to-r from-gray-900 to-blue-900 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:scale-110 hover:from-blue-800 hover:to-gray-900">
                      Make An Offer →
                    </a>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

            {/* Services Grid */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">What We Offer</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div key={service.title} className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-2xl transition">
                            <div className="text-blue-600 text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-blue-100 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                    <p className="mt-4 text-lg text-gray-700">
                        We don’t just build services; we create value for your business.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white shadow-md rounded-xl">
                                <h3 className="text-lg font-semibold text-blue-600">{benefit.title}</h3>
                                <p className="mt-2 text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 py-16 text-center text-white">
                <h2 className="text-3xl font-bold">Ready to Elevate Your Business?</h2>
                <p className="mt-2 text-lg text-gray-200">
                    Let's discuss how we can help you achieve your goals.
                </p>
                <a href="/contact" className="mt-5 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
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


