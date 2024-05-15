import logo from '/images/Logo shatel.svg';
import {TopNavigation} from "./top-navigation.jsx";
import {Button} from "../button/button.jsx";

export const Header = () => {
    return (
        <header className='pt-4'>
            <div className='container flex items-center justify-between w-full lg:w-[1440px] bg-header border stroke-black border-opacity-5 drop-shadow'>
                <img src={logo} height={64} width={64} alt='شاتل' className='md:mr-32 mr-5'/>
                <TopNavigation/>
                <div className='mr-auto ml-32 flex gap-x-8'>
                    <Button variant='orange' className='lg:block hidden'>شاتل</Button>
                    <Button className='lg:block hidden'>نماوا</Button>
                </div>
            </div>
        </header>
    )
}