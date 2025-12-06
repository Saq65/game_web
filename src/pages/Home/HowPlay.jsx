import { FaGamepad, FaUserEdit, FaMoneyBillWave } from 'react-icons/fa';

function HowPlay() {
    const steps = [
        {
            id: 1,
            icon: <FaUserEdit size={40} />,
            title: "Login",
            description: "Create your account and login to get started"
        },
        {
            id: 2,
            icon: <FaGamepad size={40} />,
            title: "Play",
            description: "Choose your favorite game and start playing"
        },
        {
            id: 3,
            icon: <FaMoneyBillWave size={40} />,
            title: "Get Paid",
            description: "Win games and receive your rewards instantly"
        }
    ];

    return (
        <div className="bg-[#060417]  mt-20 rounded-[20px] w-[90%] xl:w-[70%] md:w-[70%] lg:w-[70%] mx-auto">
            <div className="mx-auto p-4 sm:p-0 lg:p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="hidden lg:block xl:block md:block lg:col-span-2 bg-[#060417] flex justify-center lg:justify-start">
                        <div className="relative bg-[#060417]">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
                            <img
                                src=".\assets\how-play-illus.webp"
                                alt="Gamer Character"
                                className="relative w-80 h-80 object-cover rounded-2xl "
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="text-white text-2xl lg:text-4xl md:text-5xl font-bold text-center mb-12">
                            How To Play
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {steps.map((step) => (
                                <div key={step.id} className="flex flex-col items-center text-center group">
                                    <div className="relative mb-6">
                                        <div className="absolute -top-2 -left-2 bg-yellow-500 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                            {step.id}
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-110">
                                            <div className="text-white group-hover:text-yellow-500 transition-colors duration-300">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm max-w-xs">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowPlay;