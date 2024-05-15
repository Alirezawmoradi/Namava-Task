import wifi from '/images/wifiicon.png'
import cloud from '/images/cloud.png'
import movie from '/images/pic2.png'

export const MovieSection = () => {
    return (
        <section className='2xl:bg-movie-section 2x:mt-16 mt-0 bg-center bg-no-repeat flex flex-col lg:justify-start justify-center'>
            <div className='flex items-center justify-center'>
                <img src={wifi} height={152.7} width={152.7} alt='wifi' className='md:mr-24 sm:mr-20 mr-8'/>
                <img src={cloud} height={137} width={113} alt='cloud' className='mr-8 md:mr-40 sm:mr-36'/>
            </div>
            <img src={movie} height={500} width={500} className='block -mt-20 md:-mt-28 2xl:hidden md:mr-36 sm:mr-20 lg:mr-72' alt='movie'/>
        </section>
    )
}