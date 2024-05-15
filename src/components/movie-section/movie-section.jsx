import wifi from '/images/wifiicon.png'
import cloud from '/images/cloud.png'
import movie from '/images/pic2.png'

export const MovieSection = () => {
    return (
        <section className='lg:bg-movie-section lg:mt-16 mt-0 bg-center bg-no-repeat flex flex-col lg:justify-start justify-center'>
            <div className='flex items-center justify-center'>
                <img src={wifi} height={152.7} width={152.7} alt='wifi' className='md:mr-24 mr-8'/>
                <img src={cloud} height={137} width={113} alt='cloud' className='mr-8 md:mr-40'/>
            </div>
            <img src={movie} height={500} width={500} className='block -mt-20 md:-mt-28 lg:hidden md:mr-36' alt='movie'/>
        </section>
    )
}