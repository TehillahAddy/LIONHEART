"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/l1 (1).png";
import Logos from "../public/images/52.webp";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
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


  return (
    <div className="homepage">
      <div className="background-container"> </div>
      <header
        className={`w-full max-w-7xl mx-auto flex justify-between items-center ${isSticky ? (isHiding ? "header-sticky hide" : "header-sticky") : "header-custom"
          }`}
        style={{ height: "80px" }} /* Constrain the header height */
      >
        <Image
          src={Logo}
          alt="Lionheart Tech Logo"
          width={100}
          height={100}
          className="logo-image"
        />
        <nav className="flex gap-6">
          <Link href="/" className="hover">
            Home
          </Link>
          <Link href="/about" className="hover">
            About
          </Link>
          <Link href="/services" className="hover">
            Services
          </Link>
          <Link href="/contact" className="hover">
            Contact
          </Link>
        </nav>
        <button className="custom-button" >
          Get in Touch
        </button>
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
        {/* Services Section */}
        <section className="w-full px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-700 mb-4">
                We create stunning and responsive websites that captivate your audience.
              </p>
              <Link href="/services/web-design" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
              <p className="text-gray-700 mb-4">
                Our team delivers eye-catching designs for branding, marketing, and more.
              </p>
              <Link href="/services/graphic-design" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Tech Solutions</h3>
              <p className="text-gray-700 mb-4">
                From custom software to IT consulting, we provide solutions that meet your needs.
              </p>
              <Link href="/services/tech-solutions" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-12 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-700 mb-4">
                We create stunning and responsive websites that captivate your audience.
              </p>
              <Link href="/services/web-design" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
              <p className="text-gray-700 mb-4">
                Our team delivers eye-catching designs for branding, marketing, and more.
              </p>
              <Link href="/services/graphic-design" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Tech Solutions</h3>
              <p className="text-gray-700 mb-4">
                From custom software to IT consulting, we provide solutions that meet your needs.
              </p>
              <Link href="/services/tech-solutions" className="text-blue-500 hover:underline">Learn more &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 text-white flex justify-center items-center">
        &copy; {new Date().getFullYear()} Lionheart Tech
      </footer>
    </div>
  );
}
