function VideoSection() {
    return (
        <div className="flex flex-col items-center justify-center text-center  w-full mb-10">
            <div>
                <h1 className="font-bold text-lg lg:text-2xl pb-3">How Test automation works in <span className="text-[#5D1BB3]">TestingTool</span> </h1>
                <p className="text-sm lg:text-lg text-white/70 pb-5">Record. Replay. Relax.</p>
            </div>
            <div className="relative w-full max-w-2xl aspect-video">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/cc26zFE8X1k?si=ghDHxFhHf2LlM9Vo"
                    title="YouTube video"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default VideoSection;