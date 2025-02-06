"use client";

export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* 🔹 Hero Section */}
            <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        We are committed to innovation and excellence, helping businesses grow through technology.
                    </p>
                </div>
            </section>

            {/* 🔹 Mission & Values */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-gray-600">
                        Our mission is to deliver high-quality, scalable, and secure solutions that transform businesses.
                    </p>
                </div>
            </section>

            {/* 🔹 Company History */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Our Journey</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 shadow-md rounded-lg bg-gray-50">
                            <h3 className="text-xl font-semibold">Founded in 2015</h3>
                            <p className="mt-2 text-gray-600">Started with a vision to empower businesses through technology.</p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg bg-gray-50">
                            <h3 className="text-xl font-semibold">Expanding Globally</h3>
                            <p className="mt-2 text-gray-600">We have worked with 100+ clients worldwide and continue to grow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Meet the Team */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                    <p className="mt-4 text-gray-600">A passionate team of experts dedicated to innovation.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/150" },
                            { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/150" },
                            { name: "Mike Johnson", role: "Head of Design", img: "https://via.placeholder.com/150" }
                        ].map((member, index) => (
                            <div key={index} className="p-6 shadow-md rounded-lg bg-white text-center">
                                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full" />
                                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Call to Action */}
            <section className="bg-blue-900 text-white py-16 text-center">
                <h2 className="text-3xl font-bold">Join Our Journey</h2>
                <p className="mt-4 text-gray-300">Want to work with us? Let's build something great together.</p>
                <a href="/contact" className="mt-6 inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold transition hover:bg-gray-200">
                    Contact Us
                </a>
            </section>

            {/* Footer */}
            <footer className="w-full py-4 bg-gray-800 text-white flex justify-center items-center"> &copy; {new Date().getFullYear()} Lionheart Tech </footer>
        </div>
    );
}
