import title from '/images/title line.png'
import wifi from '/images/wifiicon.png'
import cloud from '/images/cloud.png'
import {Form} from "../components/form/form.jsx";

export const LandingPage = () => {
    return (
        <>
            <section className='bg-landing-background h-[1019px] stroke-black drop-shadow-sm bg-center bg-no-repeat'>
                <div className='flex flex-col container px-56 pt-20'>
                    <h3 className='font-extrabold'>دریافت سرویس</h3>
                    <img src={title} height={10.34} width={100} alt='title'/>
                    <p className='w-1/2 mt-5 font-normal text-base leading-6'>برای بهره‌مندی از این شرایط و دریافت
                        سرویس‌های مختلف اینترنت پرسرعت شاتل فرم زیر را تکمیل
                        کنید تا
                        همکاران ما در سریع‌ترین هنگام با شما تماس بگیرند.</p>
                </div>
                <div className='flex justify-between px-44'>
                    <Form/>
                    <section className='bg-movie-section mt-16 bg-center bg-no-repeat flex flex-col justify-start'>
                        <div className='flex items-center justify-center'>
                            <img src={wifi} height={152.7} width={152.7} alt='wifi' className='mr-24'/>
                            <img src={cloud} height={137} width={113} alt='cloud' className='mr-40 mb-12'/>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}