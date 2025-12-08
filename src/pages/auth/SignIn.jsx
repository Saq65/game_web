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
      className="min-h-screen relative overflow-hidden">
      
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Competitive Gaming Platform
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 mb-12">
              In gameio, you can participate in online duels and tournaments for the games you like to start winning big prize money.
            </p>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <FaFistRaised className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Compete Opponent</h3>
                <p className="text-gray-300 text-lg">
                  Find similarly skilled players to compete with on the games you love.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sword className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Register Yourself</h3>
                <p className="text-gray-300 text-lg">
                  Participate in duels and tournaments to show what you are made of.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <FaTrophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Win Rewards</h3>
                <p className="text-gray-300 text-lg">
                  Win real money.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 w-full max-w-md shadow-2xl">
              <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-8">
                Welcome Back
              </h2>
              
              <div className="space-y-6">
                <input
                  type="tel"
                  placeholder="+268 XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-700/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                />
                
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Otp
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="fixed bottom-6 right-6 text-white/60 text-sm">
        <p>Activate Windows</p>
        <p className="text-xs">Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
}

export default SignIn;