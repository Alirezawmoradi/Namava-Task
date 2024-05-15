import {LandingPage} from "../landing-page/landing-page.jsx";
import {Header} from "../components/header/header.jsx";
import {Footer} from "../components/footer/footer.jsx";

export const MainLayout = () => {
    return (
        <div className='min-h-screen min-w-80 md:grid md:grid-rows-[84px_1fr_auto] text-base-content bg-white' dir='rtl'>
            <Header/>
            <main>
                <LandingPage/>
            </main>
            <Footer/>
        </div>
    )
}