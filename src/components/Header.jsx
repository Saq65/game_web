import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };


    const getNavLinkClass = (path) => {
        return `cursor-pointer transition-colors duration-200 font-medium ${
            isActive(path)
                ? "text-yellow-400 border-b-2 border-yellow-400 "
                : "text-white hover:text-yellow-400"
        }`;
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-900 shadow-lg ">
            <nav className="container mx-auto px-10 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                        <img src=".\assets\logo.webp" className="img-fluid cover h-10" alt="logo" />
                    </div>

                    <ul className="hidden md:flex items-center space-x-9">
                        <li
                            onClick={() => navigate('/')}
                            className={getNavLinkClass('/')}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => navigate('/games')}
                            className={getNavLinkClass('/games')}
                        >
                            Games
                        </li>
                        <li
                            onClick={() => navigate('/trailer')}
                            className={getNavLinkClass('/trailer')}
                        >
                            Trailer
                        </li>
                        <li
                            onClick={() => navigate('/videos')}
                            className={getNavLinkClass('/videos')}
                        >
                            Videos
                        </li>
                    </ul>

                    <div className="flex items-center space-x-4">
                        <button className="text-white hover:text-yellow-400 transition-colors duration-200">
                            <BiSearch className="w-6 h-6" />
                        </button>

                        <button onClick={()=>navigate('/signin')} className="hidden sm:block bg-yellow-500 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
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
                                className={`block transition-colors duration-200 font-medium py-2 ${
                                    isActive('/') ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                }`}
                                onClick={() => {
                                    navigate('/');
                                    setMenuOpen(false);
                                }}
                            >
                                Home
                            </li>

                            <li
                                className={`block transition-colors duration-200 font-medium py-2 ${
                                    isActive('/games') ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                }`}
                                onClick={() => {
                                    navigate('/games');
                                    setMenuOpen(false);
                                }}
                            >
                                Games
                            </li>

                            <li
                                className={`block transition-colors duration-200 font-medium py-2 ${
                                    isActive('/trailer') ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                }`}
                                onClick={() => {
                                    navigate('/trailer');
                                    setMenuOpen(false);
                                }}
                            >
                                Trailer
                            </li>

                            <li
                                className={`block transition-colors duration-200 font-medium py-2 ${
                                    isActive('/videos') ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                }`}
                                onClick={() => {
                                    navigate('/videos');
                                    setMenuOpen(false);
                                }}
                            >
                                Videos
                            </li>
                            <li className="pt-2">
                                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
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