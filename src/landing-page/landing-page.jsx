import title from '/images/title line.png'

import {Form} from "../components/form/form.jsx";
import {MovieSection} from "../components/movie-section/movie-section.jsx";

export const LandingPage = () => {
    return (
        <>
            <section
                className='bg-landing-background container lg:h-[1019px] min-w-full stroke-black drop-shadow-sm bg-center bg-no-repeat'>
                <div className='flex flex-col container lg:text-right lg:items-start justify-center items-center lg:px-44 lg:pt-20 px-10 pt-10'>
                    <h3 className='font-extrabold text-sm lg:text-base'>دریافت سرویس</h3>
                    <img src={title} height={10.34} width={100} alt='title'/>
                    <p className='lg:w-1/2 mt-5 font-normal lg:text-base text-xs text-center lg:text-right leading-6'>برای بهره‌مندی از این شرایط و دریافت
                        سرویس‌های مختلف اینترنت پرسرعت شاتل فرم زیر را تکمیل
                        کنید تا
                        همکاران ما در سریع‌ترین هنگام با شما تماس بگیرند.</p>
                </div>
                <div className='flex flex-col-reverse lg:flex-row lg:px-44'>
                    <Form/>
                    <MovieSection/>
                </div>
            </section>
        </>
    )
}