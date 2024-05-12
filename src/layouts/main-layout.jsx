import {LandingPage} from "../landing-page/landing-page.jsx";

export const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen font-bold uppercase'>
            <header className='bg-gray-200 flex items-center justify-center h-20'>
                Header
            </header>
            <div className='flex-1 flex justify-center items-center'>
                <LandingPage/>
            </div>
            <footer className='bg-gray-200 flex items-center justify-center h-20'>
                Footer
            </footer>
        </div>
    )
}