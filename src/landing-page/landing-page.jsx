import title from '/public/images/title line.png'
import movie from '/public/images/pic2.png'
import wifi from '/public/images/wifiicon.png'
import cloud from '/public/images/cloud.png'

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
                    <div
                        className='w-[676px] h-[598px] bg-base-100 mt-16 rounded-[20px] border border-base-content border-opacity-10 shadow-md mr-28'>

                    </div>
                    <div className='flex flex-col'>
                        <div className='flex absolute items-center justify-center pb-20'>
                            <img src={wifi} height={152.7} width={152.7} alt='wifi' className='mr-24 mt-20'/>
                            <img src={cloud} height={137} width={113} alt='cloud' className='mr-40'/>
                        </div>
                        <img src={movie} height={500} width={500} alt='movie' className='mt-32'/>
                    </div>
                </div>
            </section>
        </>
    )
}