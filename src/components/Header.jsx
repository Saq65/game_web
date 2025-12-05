import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gray-900 shadow-lg ">
            <nav className="container mx-auto px-10 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src=".\assets\logo.webp" className="img-fluid cover h-10" alt="logo" />
                    </div>

                    <ul className="hidden md:flex items-center space-x-9">
                        <li
                            className="text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200 font-medium"
                        >
                            Home
                        </li>
                        <li
                            className="text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200 font-medium"
                        >
                            Games
                        </li>
                        <li
                            className="text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200 font-medium"
                        >
                            Trailer
                        </li>
                        <li
                            className="text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200 font-medium"
                        >
                            Videos
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4">
                        <button className="text-white hover:text-yellow-400 transition-colors duration-200">
                            <BiSearch className="w-6 h-6" />
                        </button>

                        <button className="hidden sm:block bg-yellow-500 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                            Sign in
                        </button>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <BiX className="w-7 h-7" />
                            ) : (
                                <BiMenu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
                        <ul className="space-y-3">
                            <li
                                href="#home"
                                className="block text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </li>

                            <li
                                href="#games"
                                className="block text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Games
                            </li>

                            <li
                                className="block text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Trailer
                            </li>

                            <li
                                className="block text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                Videos
                            </li>
                            <li className="pt-2">
                                <button className="w-full bg-yellow-600 hover:bg-Yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                                    Sign in
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;