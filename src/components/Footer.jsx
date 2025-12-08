import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1a1d29] text-white pt-32 pb-8">  

      <div className="w-full px-4 -mt-32 mb-1 relative">
        <div
          className="text-white relative bottom-[106px] rounded-2xl bg-cover bg-center w-full max-w-6xl mx-auto bg-no-repeat overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('./assets/home4.webp')" }}>
          <div className="bg-black/60 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-8 lg:px-12 py-12 lg:py-16">
              <div className="text-center lg:text-left max-w-xl">
                <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold mb-4">
                  Ready To Start Your Journey?
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200">
                  Stop Scrolling, Start Playing. Create your account now and earn 500 coins
                </p>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => navigate('/signin')} 
                  className="bg-yellow-400 hover:bg-yellow-500 px-10 py-4 font-bold text-lg text-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                  Login Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex items-center">
              <img src=".\assets\logo.webp" className='h-12 lg:h-14' alt="Logo" />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-base font-semibold">
              <ul className='flex items-center space-x-8 lg:space-x-10 cursor-pointer'>
                <li onClick={() => navigate('/')} className="hover:text-yellow-400 transition-colors">Home</li>
                <li onClick={() => navigate('/games')} className="hover:text-yellow-400 transition-colors">Games</li>
                <li onClick={() => navigate('/trailer')} className="hover:text-yellow-400 transition-colors">Trailer</li>
                <li onClick={() => navigate('/blog')} className="hover:text-yellow-400 transition-colors">Blogs</li>
                <li onClick={() => navigate('/video')} className="hover:text-yellow-400 transition-colors">Videos</li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-4">
            <a href="#facebook" className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all cursor-pointer">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#youtube" className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all cursor-pointer">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#instagram" className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all cursor-pointer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            Copyright © thegame io | Designed by <span className="text-yellow-400">thegameio</span>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-xs">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </footer>
  );  
}

export default Footer;