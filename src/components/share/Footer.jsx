import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 md:px-12 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="md:col-span-1">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Wanderlast
                    </h2>
                    <p className="text-sm text-gray-400 mt-2 max-w-xs">
                        Your gateway to extraordinary travel experiences around the
                        world.
                    </p>
                </div>
                {/* Top */}
                <div className="grid md:grid-cols-4 gap-10 mt-10">
                    {/* Brand */}


                    {/* Newsletter */}
                    <div className="w-full">
                        <h4 className="text-xs uppercase tracking-widest text-gray-300 mb-3">
                            Newsletter
                        </h4>
                        <p className="text-xs text-gray-500 mb-4">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>

                        <div className="flex items-center bg-zinc-800 max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent px-3 py-2 text-sm w-full outline-none"
                            />
                            <button className="px-3 text-lg">↗</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-300 mb-3">
                            Quick Links
                        </h4>

                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/destinations">Destinations</Link>
                            </li>
                            <li>
                                <Link href="/bookings">My Bookings</Link>
                            </li>
                            <li>
                                <Link href="/profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support + Contact */}
                    <div className=" gap-8">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-300 mb-3">
                                Support
                            </h4>

                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Link href="/">Help Center</Link>
                                </li>
                                <li>
                                    <Link href="/">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link href="/">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-300 mb-3">
                            Contact Us
                        </h4>

                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>786 901 1622</li>
                            <li>info@wanderland.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © 2026 Wanderlust. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm text-gray-300">
                        <Link href="/">X</Link>
                        <Link href="/">in</Link>
                        <Link href="/">◎</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;