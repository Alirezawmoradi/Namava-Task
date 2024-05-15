import logo from '/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";
import {Button} from "../button/button.jsx";

export const Header = () => {
    return (
        <header className='pt-4'>
            <div
                className='container flex items-center justify-between w-full lg:w-[1440px] bg-header border stroke-black border-opacity-5 drop-shadow'>
                <img src={logo} height={64} width={64} alt='شاتل' className='lg:mr-32 md:ml-2 sm:ml-2 mr-5'/>
                <TopNavigation/>
                <div className='mr-auto  ml-32 md:ml-2 sm:ml-2 flex gap-x-8 md:gap-x-6'>
                    <Button variant='orange' size=''>شاتل</Button>
                    <Button size=''>نماوا</Button>
                </div>
            </div>
        </header>
    )
}