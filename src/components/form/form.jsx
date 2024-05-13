import {Label} from "../label/label.jsx";
import {TextBox} from "../textbox/textbox.jsx";
import {Button} from "../button/button.jsx";

export const Form = () => {
    return (
        <div
            className='w-[676px] h-[598px] bg-base-100 mt-16 rounded-[20px] border border-base-content border-opacity-10 shadow-md mr-28'>
            <form className='flex flex-col justify-center items-center gap-6 mt-16'>
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
                <div className='flex items-end ml-auto mr-8 mt-2'>
                <Button variant='orange' type='submit'>ارسال</Button>
                </div>
            </form>
        </div>
    )
}