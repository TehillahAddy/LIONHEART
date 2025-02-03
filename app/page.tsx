
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



export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(0);

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



  const projects = [
    {
      company: "TechCorp",
      service: "Web Development",
      image: "/projects/techcorp.png",
      description: "Revamped their entire online presence with a modern, responsive website.",
      link: "#",
    },
    {
      company: "DesignPro",
      service: "Branding & Graphics",
      image: "/projects/designpro.png",
      description: "Created a sleek brand identity with logo, colors, and marketing assets.",
      link: "#",
    },
    {
      company: "CloudNet",
      service: "IT Solutions",
      image: "/projects/cloudnet.png",
      description: "Implemented a secure cloud infrastructure for their growing business.",
      link: "#",
    },
  ];

  const clients = [
    { name: "Company A", logo: "/logos/company-a.png" },
    { name: "Company B", logo: "/logos/company-b.png" },
    { name: "Company C", logo: "/logos/company-c.png" },
    { name: "Company D", logo: "/logos/company-d.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === -100 * (clients.length - 1) ? 0 : prev - 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="background-container"> </div>
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



      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 justify-center gap-8 py-12 main" >
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

        <section className="it-support-section">
          <div className="image-container" data-aos="fade-right">
            <Image className="rotate-image" src="/images/ah.png" alt="lIonheart Tech" width={600} height={600} />
          </div>
          <div className="content" data-aos="fade-left">
            <h1>Fast-tracking your I.T. needs with expert support</h1>
            <p>Opt for the leading digital agency to expand your business</p>
            <div className="button-container">
              <button>View More About Uss</button>
            </div>
          </div>
        </section>
      </main>

      <section className="our-work-section w-full px-8 py-16 bg-gray-50 text-center">

        <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Work & Clients</h2>
        <p className="text-lg text-gray-600 mb-12">Some of the brands we've helped grow.</p>

        {/* Client Logos Auto-Scrolling */}
        <div className="overflow-hidden w-full">
          <div
            className="flex w-max transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${offset}%)` }}
          >
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="p-4">
                <Image src={client.logo} alt={client.name} width={150} height={60} />
              </div>
            ))}
          </div>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <Image src={project.image} alt={project.company} width={300} height={200} className="rounded-lg" />
              <h3 className="text-2xl font-semibold mt-4">{project.company}</h3>
              <p className="text-blue-500 font-medium">{project.service}</p>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-white bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800">Want to be our next success story?</h3>
          <p className="text-lg text-gray-600 mt-2">Let’s build something amazing together.</p>
          <a href="/contact" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 text-white flex justify-center items-center">
        &copy; {new Date().getFullYear()} Lionheart Tech
      </footer>
    </div>
  );
}