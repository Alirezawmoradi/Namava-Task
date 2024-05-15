import title from '/images/title line.png'
import {Form} from "../components/form/form.jsx";
import {MovieSection} from "../components/movie-section/movie-section.jsx";

export const LandingPage = () => {
    return (
        <>
            <section
                className='bg-landing-background container 2xl:h-[1019px] stroke-black drop-shadow-sm bg-center bg-no-repeat'>
                <div className='flex flex-col container 2xl:text-right 2xl:items-start justify-center items-center xl:px-10 2xl:px-44 lg:px-36 lg:pt-20 px-10 pt-10'>
                    <h3 className='font-extrabold text-sm 2xl:text-base'>دریافت سرویس</h3>
                    <img src={title} height={10.34} width={100} alt='title'/>
                    <p className='lg:w-1/2 mt-5 font-normal 2xl:text-base text-xs text-center 2xl:text-right leading-6'>برای بهره‌مندی از این شرایط و دریافت
                        سرویس‌های مختلف اینترنت پرسرعت شاتل فرم زیر را تکمیل
                        کنید تا
                        همکاران ما در سریع‌ترین هنگام با شما تماس بگیرند.</p>
                </div>
                <div className='flex flex-col-reverse 2xl:flex-row 2xl:px-36 xl:px-10'>
                    <Form/>
                    <MovieSection/>
                </div>
            </section>
        </>
    )
}