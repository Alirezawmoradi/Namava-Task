import logo from '/public/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";

export const Header = () => {
    return (
        <header>
            <div className='container flex items-center justify-between w-[1440px] border-b border-base-content border-opacity-5'>
                <img src={logo} height={64} width={64} alt='شاتل'/>
                <TopNavigation/>
                <span className='mr-auto'>Platform</span>
            </div>
        </header>
    )
}