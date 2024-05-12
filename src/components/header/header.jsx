import logo from '/public/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";

export const Header = () => {
    return (
        <header className='border-b border-base-content border-opacity-5'>
            <div className='container flex items-center justify-between'>
                <img src={logo} height={64} width={64} alt='شاتل'/>
                <TopNavigation/>
                <span className='mr-auto'>Platform</span>
            </div>
        </header>
    )
}