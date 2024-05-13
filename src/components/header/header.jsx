import logo from '/public/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";

export const Header = () => {
    return (
        <header>
            <div className='container flex items-center justify-between w-[1440px] bg-header border-base-content border-solid stroke-black border-opacity-5'>
                <img src={logo} height={64} width={64} alt='شاتل' className='mr-32'/>
                <TopNavigation/>
                <div className='mr-auto'>
                <span className='ml-32'>Platform</span>
                </div>
            </div>
        </header>
    )
}