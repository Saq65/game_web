import { Play } from "lucide-react";

function Blog() {

        const trailers = [
        { id: 1, title: "Archery Master", image: "./assets/video.webp" },
        { id: 2, title: "Archery Master", image: "./assets/video.webp" },
        { id: 3, title: "Archery Master", image: "./assets/video.webp" },
        { id: 4, title: "Archery Master", image: "./assets/video.webp" },
        { id: 5, title: "Archery Master", image: "./assets/video.webp" },
        { id: 6, title: "Archery Master", image: "./assets/video.webp" },
        { id: 7, title: "Archery Master", image: "./assets/video.webp" },
        { id: 8, title: "Archery Master", image: "./assets/video.webp" },
        { id: 9, title: "Archery Master", image: "./assets/video.webp" },
        { id: 10, title: "Archery Master", image: "./assets/video.webp" },
        { id: 11, title: "Archery Master", image: "./assets/video.webp" },
        { id: 12, title: "Archery Master", image: "./assets/video.webp" },
    ];

    const handlePlay = (id) => {
        console.log(`Playing trailer ${id}`);
    }
  return (
    <div>
          <div
                className="text-white max-h-[420px] min-h-[320px] p-8 bg-cover bg-center w-full mx-auto bg-no-repeat overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] max-w-[1400px] gap-8">
                    <div className="flex flex-col gap-4 z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blogs</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Home</span>
                            <span className="text-gray-300">›</span>
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Pages</span>
                            <span className="text-gray-300">›</span>
                            <span className="text-yellow-400">Blogs</span>
                        </div>
                    </div>
                </div>
            </div>




             <div className="py-16 px-4 bg-[#181720]">

                <div className="mb-12">
                    <h2 className="text-center text-3xl font-bold text-white">
                        Latest <span className="text-yellow-500">Blogs</span>
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {trailers.map((trailer) => (
                            <div
                                key={trailer.id}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer">
                                    <img
                                        src={trailer.image}
                                        alt={trailer.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            onClick={() => handlePlay(trailer.id)}
                                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
                                        >
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                </div>

                                <div className="w-full">
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                        {trailer.title}
                                    </h3>
                                </div>

                                <button
                                    onClick={() => handlePlay(trailer.id)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Play
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 640px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
    </div>
  )
}

export default Blog