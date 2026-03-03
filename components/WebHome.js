import NavBar from "../components/Header/NavBar"
import HeroSection from "../components/Sections/HeroSection"
import AboutSection from "../components/Sections/AboutSection"
import VideoSection from "../components/Sections/VideoSection"
import Footer from "../components/Footer/Footer"

function WebHome() {
    return (
        <div className="min-h-screen bg-gradient-out">
            <NavBar />
            <div className="px-6 md:px-16 lg:px-32">
                <HeroSection />
                <AboutSection />
                <VideoSection />
            </div>
            <Footer />
        </div>
    )
}

export default WebHome