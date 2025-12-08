import { Sword } from 'lucide-react';
import { useState } from 'react';
import { FaFistRaised, FaTrophy } from 'react-icons/fa';

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOtp = () => {
    console.log('Sending OTP to:', phoneNumber);
  };

  return (
    <div 
      style={{ 
        backgroundImage: "url('./assets/post-img-6.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="min-h-screen relative overflow-hidden p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24">
      
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          <div className="text-white space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Competitive Gaming Platform
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 lg:mb-12">
              In gameio, you can participate in online duels and tournaments for the games you like to start winning big prize money.
            </p>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <FaFistRaised className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Compete Opponent</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Find similarly skilled players to compete with on the games you love.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sword className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Register Yourself</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Participate in duels and tournaments to show what you are made of.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <FaTrophy className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Win Rewards</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Win real money.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 w-full max-w-md shadow-2xl">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
                Welcome Back
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <input
                  type="tel"
                  placeholder="+268 XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-700/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base sm:text-lg"
                />
                
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg sm:text-xl py-3 sm:py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Otp
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 text-white/60 text-xs sm:text-sm">
        <p>Activate Windows</p>
        <p className="text-[10px] sm:text-xs">Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
}

export default SignIn;