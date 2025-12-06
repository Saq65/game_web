import React from 'react'

function TrailerPage() {
    return (
        <div>
            <div
                className="text-white max-h-[420px] min-h-[320px] p-8 bg-cover bg-center w-full mx-auto bg-no-repeat overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] max-w-[1400px] gap-8">
                    <div className="flex flex-col gap-4 z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Trailer</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Home</span>
                            <span className="text-gray-300">›</span>
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Pages</span>
                            <span className="text-gray-300">›</span>
                            <span className="text-yellow-400">Trailer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrailerPage