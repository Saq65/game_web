import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center">
              <img src=".\assets\logo.webp" className='img-fluid h-10' alt="" />
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-base font-semibold">
              <ul className='flex items-center space-x-6 sm:space-x-9 md:space-x-9 lg:space-x-9 cursor-pointer '>
                <li onClick={() => navigate('/')} className="hover:text-yellow-400 transition-colors">Home</li>
                <li onClick={() => navigate('/games')} className="hover:text-yellow-400 transition-colors">Games</li>
                <li i onClick={() => navigate('/trailer')} className="hover:text-yellow-400 transition-colors">Trailer</li>
                <li className="hover:text-yellow-400 transition-colors">Blogs</li>
                <li className="hover:text-yellow-400 transition-colors">Videos</li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-4">
            <a href="#facebook" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500 transition-all">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#youtube" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-red-500 hover:bg-red-500 transition-all">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#instagram" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 transition-all">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            Copyright © thegame io | Designed by <span className="text-yellow-400">thegameio</span>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;