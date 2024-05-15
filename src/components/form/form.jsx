import {Label} from "../label/label.jsx";
import {TextBox} from "../textbox/textbox.jsx";
import {Button} from "../button/button.jsx";

export const Form = () => {
    return (
        <div
            className='fade-in container 2xl:w-[676px] lg:w-8/12 md:w-full sm:w-8/12 2xl:h-[598px] w-80 h-96 bg-base-100 2xl:mt-16 -mt-7 md:-mt-20 sm:-mt-20 mb-10 rounded-[20px] border border-base-content border-opacity-10 shadow-md'>
            <form className='flex flex-col justify-center items-center 2xl:gap-6 gap-2 2xl:mt-16 mt-2 text-xs 2xl:text-base'>
                <div className='flex flex-col'>
                    <Label>نام و نام خانوادگی</Label>
                    <TextBox/>
                </div>
                <div className='flex flex-col'>
                    <Label>شماره تماس ثابت (به همراه کد شهر)</Label>
                    <TextBox/>
                </div>
                <div className='flex flex-col'>
                    <Label>شماره موبایل</Label>
                    <TextBox/>
                </div>
                <div className='flex flex-col'>
                    <Label>لطفا کاراکترها را تایپ کنید</Label>
                    <TextBox/>
                </div>
                <div className='flex items-end ml-auto lg:mr-8 md:mr-20 sm:mr-16 mr-4 2xl:mt-2'>
                <Button variant='orange' type='submit' size=''>ارسال</Button>
                </div>
            </form>
        </div>
    )
}