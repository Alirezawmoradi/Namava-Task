import logo from '/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";

export const Header = () => {
    return (
        <header className='pt-4'>
            <div className='container flex items-center justify-between w-[1440px] bg-header border stroke-black border-opacity-5 drop-shadow'>
                <img src={logo} height={64} width={64} alt='شاتل' className='mr-40'/>
                <TopNavigation/>
                <div className='mr-auto'>
                <span className='ml-32'>Platform</span>
                </div>
            </div>
        </header>
    )
}