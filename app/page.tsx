import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-20 bg-gray-100">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
        <div className="text-2xl font-bold">Lionheart Tech</div>
        <nav className="flex gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 justify-center gap-8 py-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Lionheart Tech</h1>
          <p className="text-lg mb-6">Innovative solutions for a modern world</p>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={39}
            priority
          />
        </section>

        {/* Instructions or Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <ol className="list-decimal list-inside text-center sm:text-left">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
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
