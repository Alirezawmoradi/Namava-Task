import {Label} from "../label/label.jsx";
import {TextBox} from "../textbox/textbox.jsx";
import {Button} from "../button/button.jsx";

export const Form = () => {
    return (
        <div
            className='fade-in container lg:w-[676px] md:w-full lg:h-[598px] w-80 h-96 bg-base-100 lg:mt-16 -mt-7 mb-10 rounded-[20px] border border-base-content border-opacity-10 shadow-md'>
            <form className='flex flex-col justify-center items-center lg:gap-6 gap-2 lg:mt-16 mt-2 text-xs lg:text-base'>
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
                <div className='flex items-end ml-auto lg:mr-8 md:mr-20 mr-4 lg:mt-2'>
                <Button variant='orange' type='submit' size=''>ارسال</Button>
                </div>
            </form>
        </div>
    )
}