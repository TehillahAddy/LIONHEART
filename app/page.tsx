"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/wall1.jpg";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

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
    <div className="homepage">
      <div className="background-container"> </div>
      
      <header
        className={`w-full max-w-7xl mx-auto flex justify-between items-center ${
          isSticky ? (isHiding ? "header-sticky hide" : "header-sticky") : "header-custom"
        }`}
      >
        <div className="text-2xl font-bold text-orange-600">Lionheart Tech</div>
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
          Get in Touch
        </button>
      </header>
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Lionheart Tech</h1>
        <p className="text-lg mb-6">Innovative solutions for a modern world</p>
      </section>


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
