import title from '/public/images/title line.png'

export const LandingPage = () => {
    return (
        <>
            <section className='bg-landing-background h-[1019px] stroke-black drop-shadow-sm bg-center bg-no-repeat'>
                <div className='flex flex-col container px-56 py-20'>
                        <h3 className='font-extrabold'>دریافت سرویس</h3>
                        <img src={title} height={10.34} width={100} alt='title'/>
                        <p className='w-1/2 mt-5 font-normal text-base leading-6'>برای بهره‌مندی از این شرایط و دریافت سرویس‌های مختلف اینترنت پرسرعت شاتل فرم زیر را تکمیل
                            کنید تا
                            همکاران ما در سریع‌ترین هنگام با شما تماس بگیرند.</p>
                </div>
            </section>
        </>
    )
}