import {LandingPage} from "../landing-page/landing-page.jsx";
import {Header} from "../components/header/header.jsx";
import {Footer} from "../components/footer/footer.jsx";

export const MainLayout = () => {
    return (
        <div className='min-h-screen grid grid-rows-[84px_1fr_auto] text-base-content' dir='rtl'>
            <Header/>
            <div className='flex-1 flex justify-center items-center'>
                <LandingPage/>
            </div>
            <Footer/>
        </div>
    )
}