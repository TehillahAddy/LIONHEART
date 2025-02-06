
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logos from "../public/images/52.webp";
import Logs from "../public/images/logs.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import { FaStar } from 'react-icons/fa';
import {
  Monitor, PenTool, Server, TrendingUp, Smartphone, Search, ClipboardList, ShieldCheck, FileText
} from "lucide-react";
import { FaCheckCircle, FaTimesCircle, FaBolt, FaClock, FaAward } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import "@fontsource/sora";



export default function Home() {
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


  const services = [
    {
      title: "Web Design",
      description: "We create stunning and responsive websites that captivate your audience.",
      link: "/services/web-design",
      icon: <Monitor size={40} className="text-blue-500" />,
    },
    {
      title: "Graphic Design",
      description: "Our team delivers eye-catching designs for branding, marketing, and more.",
      link: "/services/graphic-design",
      icon: <PenTool size={40} className="text-pink-500" />,
    },
    {
      title: "Tech Solutions",
      description: "From custom software to IT consulting, we provide solutions that meet your needs.",
      link: "/services/tech-solutions",
      icon: <Server size={40} className="text-green-500" />,
    },
    {
      title: "SEO Optimization",
      description: "Boost your website rankings with cutting-edge SEO strategies and analytics.",
      link: "/services/seo",
      icon: <Search size={40} className="text-yellow-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Engage and grow your audience with data-driven marketing strategies.",
      link: "/services/digital-marketing",
      icon: <TrendingUp size={40} className="text-purple-500" />,
    },
    {
      title: "Mobile App Development",
      description: "We develop intuitive and scalable mobile applications for iOS & Android.",
      link: "/services/mobile-app-development",
      icon: <Smartphone size={40} className="text-red-500" />,
    },
    {
      title: "Secretarial & Admin Services",
      description: "We offer professional administrative support to keep your business running smoothly.",
      link: "/services/secretarial-admin",
      icon: <ClipboardList size={40} className="text-orange-500" />,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with top-tier cybersecurity solutions and risk assessments.",
      link: "/services/cybersecurity",
      icon: <ShieldCheck size={40} className="text-teal-500" />,
    },
    {
      title: "Content Creation",
      description: "High-quality content that enhances your brand’s voice and engagement.",
      link: "/services/content-creation",
      icon: <FileText size={40} className="text-indigo-500" />,
    },
  ];

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
    { icon: <FaBolt />, title: "Fast Turnaround", text: "Delivering projects on time.", color: "text-blue-400" },
    { icon: <FaStar />, title: "Top Quality", text: "Premium designs & development.", color: "text-yellow-400" },
    { icon: <FaAward />, title: "Certified Experts", text: "Industry-leading professionals.", color: "text-green-400" },
  ];


  useEffect(() => {
    AOS.init({ duration: 1000 });
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


  return (
    <div className="bg-gray-100 min-h-screen lp">
      <div className="homepage">
        <div className="background-container">
          <video autoPlay loop muted className="absolute w-full h-full object-cover ">
            <source src="/images/CV.mp4" type="video/mp4" />
          </video>
        </div>
        <header className="mobile-header">
          <div className="header-container">
            {/* Logo */}
            <Image src={Logs} alt="Lionheart Tech Logo" width={90} height={90} />

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
                <Image src={Logs} alt="Lionheart Tech Logo" width={80} height={80} />
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
          <Image
            src={Logs}
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


        <section className="hero-section">
          <div className="welcome-badge">Welcome To</div>
          <h1>
            <span className="highlight">LionHeart</span> <br />
            <span className="highlight">Tech</span>
          </h1>
        </section>
        <p className="description">
          {displayedText}
          <span className="cursor"></span>
        </p>


        <div className="image-content" data-aos="fade-left">
          <Image
            src={Logos}
            alt="Lionheart Tech Logo"
            width={500}
            height={100}
            className="imag-content"
          />
        </div>
      </div>

      <section className="galaxy" >
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

      <section className="w-full px-4 py-10 bg-gradient-to-b from-[white] to-[white] relative overflow-hidden">
        {/* Animated Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-900 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md transition duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, -1, 0], // Light wiggle effect
                transition: { duration: 0.3 },
              }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-0 group-hover:opacity-30 transition duration-500"></div>

              {/* Animated Icon */}
              <motion.div
                className="mb-4 flex justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-3 text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                className="text-gray-600 mb-4 text-center text-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>

              {/* Animated Button */}
              <div className="text-center">
                <motion.a
                  href={service.link}
                  className="text-blue-600 font-medium hover:underline text-sm inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn more &rarr;
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      <section
        className="w-full px-8 py-16 bg-gradient-to-br from-gray-900 to-black text-center text-white"
        style={{ width: "100vw !important", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      >
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Lionheart Tech?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          What makes us different from the rest?
        </motion.p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: FaBolt, title: "Fast Turnaround", text: "Delivering projects on time, every time.", color: "text-blue-400" },
            { icon: FaStar, title: "5-Star Quality", text: "High-quality designs & development.", color: "text-yellow-400" },
            { icon: FaAward, title: "Certified Experts", text: "Skilled professionals at your service.", color: "text-green-400" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center flex-col p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ rotate: [0, 2, -2, 0] }}
            >
              <item.icon className={`${item.color} text-5xl mb-3 animate-pulse`} />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full max-w-4xl mx-auto border-collapse border border-gray-600 bg-gray-900 shadow-xl text-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-4">Feature</th>
                <th className="p-4 text-center">Lionheart Tech ✅</th>
                <th className="p-4 text-center">Competitors ❌</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Custom Web Solutions", true],
                ["Affordable Pricing", true],
                ["Fast Project Delivery", true],
                ["24/7 Customer Support", true]
              ].map((row, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} border-t border-gray-600`}>
                  <td className="p-4">{row[0]}</td>
                  <td className="p-4 text-center"><FaCheckCircle className="text-green-400 text-2xl mx-auto" /></td>
                  <td className="p-4 text-center"><FaTimesCircle className="text-red-400 text-2xl mx-auto" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold">Ready to work with the best?</h3>
          <p className="text-lg text-gray-300 mt-2">Let's take your business to the next level.</p>
          <motion.a
            href="/contact"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:scale-110 transition duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
          >
            Get Started →
          </motion.a>
        </motion.div>
      </section>

      <section className="it-support-section">
        <div className="image-container" data-aos="fade-right">
          <Image className="rotate-image" src="/images/ah.png" alt="lIonheart Tech" width={600} height={600} />
        </div>
        <div className="content" data-aos="fade-left">
          <h1>Fast-tracking your I.T. needs with expert support</h1>
          <p>Opt for the leading digital agency to expand your business</p>
          <div className="button-container">
            <button>View More About Us</button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-12 px-6 md:px-16 lg:px-24 border-t border-gray-200 dark:border-gray-800 font-sora text-center md:text-left transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-black hover:text-blue-600 transition-all duration-300">
              LIONHEART TECH<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-600 mt-2">Empowering businesses with cutting-edge technology.</p>
            <p className="text-gray-600 mt-1">Accra, GH</p>
            {/* Certifications */}
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <img src="/images/logs.png" alt="Certifications" className="w-24 h-24 " />
            </div>
            <p className="text-gray-500 text-sm mt-2">&copy; {new Date().getFullYear()} Lionheart Tech. All rights reserved.</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
            {[
              { title: "Solutions", links: ["AI Solutions", "Cybersecurity", "Cloud Services", "Enterprise IT"], paths: ["/ai-solutions", "/cybersecurity", "/cloud-services", "/enterprise-it"] },
              { title: "Resources", links: ["Blog", "Case Studies", "Whitepapers", "Webinars"], paths: ["/blog", "/case-studies", "/whitepapers", "/webinars"] },
              { title: "Company", links: ["About Us", "Careers", "Contact", "Partnerships"], paths: ["/about", "/careers", "/contact", "/partnerships"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"], paths: ["/privacy-policy", "/terms-of-service", "/cookie-policy", "/security"] }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-black">{section.title}</h3>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={section.paths[idx]} className="relative hover:text-blue-600 transition group">
                        {link}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-col md:flex-row items-center gap-3 mt-6 md:mt-0">
            {[{ icon: FaXTwitter, href: "https://twitter.com/LionheartTech" },
            { icon: FaLinkedin, href: "https://linkedin.com/company/lionheart-tech" },
            { icon: FaInstagram, href: "https://instagram.com/lionheart.tech" }].map(({ icon: Icon, href }, index) => (
              <Link key={index} href={href} target="_blank" className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300">
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