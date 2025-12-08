import React from 'react';

function GamesPage() {

    const allGames = [
        { id: 1, title: "Warzone", image: "/assets/games-slider1/browse-game-img-1.webp" },
        { id: 2, title: "Redsquad", image: "/assets/games-slider1/browse-game-img-2.webp" },
        { id: 3, title: "Cyborg", image: "/assets/games-slider1/browse-game-img-3.webp" },
        { id: 4, title: "Headshot", image: "/assets/games-slider1/browse-game-img-4.webp" },
        { id: 5, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-5.webp" },
        { id: 6, title: "Army", image: "/assets/games-slider1/browse-game-img-6.webp" },
        { id: 7, title: "Holigans", image: "/assets/games-slider1/browse-game-img-7.webp" },
        { id: 8, title: "Anonymous", image: "/assets/games-slider1/browse-game-img-8.webp" },
        { id: 9, title: "Soldier", image: "/assets/games-slider1/browse-game-img-9.webp" },
        { id: 10, title: "Ninja", image: "/assets/games-slider1/browse-game-img-10.webp" },
        { id: 11, title: "Pirats", image: "/assets/games-slider1/browse-game-img-11.webp" },
        { id: 12, title: "Spartan", image: "/assets/games-slider1/browse-game-img-12.webp" },
        { id: 14, title: "Cyborg", image: "/assets/games-slider1/browse-game-img-14.webp" },
        { id: 15, title: "Head", image: "/assets/games-slider1/browse-game-img-15.webp" },
        { id: 16, title: "Sword Shield", image: "/assets/games-slider1/browse-game-img-16.webp" },
        { id: 17, title: "Head Hunter", image: "/assets/games-slider1/browse-game-img-17.webp" },
        { id: 18, title: "Archer", image: "/assets/games-slider1/browse-game-img-18.webp" },
        { id: 19, title: "CyberPunk", image: "/assets/games-slider1/browse-game-img-19.webp" },
        { id: 20, title: "Gunslinger", image: "/assets/games-slider1/browse-game-img-20.webp" },
        { id: 21, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-21.webp" },
        { id: 22, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-22.webp" },
        { id: 24, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-24.webp" }
    ];

    return (
        <div>
            <div
                className="text-white max-h-[420px] min-h-[320px] p-8 bg-cover bg-center w-full mx-auto bg-no-repeat overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] max-w-[1400px] gap-8">
                    <div className="flex flex-col gap-4 z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Games</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Home</span>
                            <span className="text-gray-300">›</span>
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Pages</span>
                            <span className="text-gray-300">›</span>
                            <span className="text-yellow-400">Games</span>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center justify-center">
                        <img src="/assets/game-banner-illus-4.webp" className="w-[120px] md:w-auto object-contain" alt="banner-1" />
                        <img src="/assets/game-banner-illus-3.webp" className="w-[120px] md:w-auto object-contain" alt="banner-2" />
                    </div>
                </div>
            </div>

            <div className="py-12 bg-[#181820] min-h-screen">
                <div className="mb-12">
                    <h2 className="text-center text-3xl font-bold text-white">
                        Browse <span className="text-yellow-500">Games</span>
                    </h2>
                </div>

                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {
                            allGames.map(res => (
                                <div className='group relative rounded-xl' key={res.id}>
                                    <div className="cursor-pointer relative overflow-hidden rounded-[20px]">
                                        
                                        <img
                                            src={res.image}
                                            alt={res.title}
                                            className="w-full object-cover rounded-[20px] border-2 border-[#36363e] group-hover:border-yellow-500 transition-all duration-300"
                                        />

                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 text-center">
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                            {res.title}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamesPage;