import wifi from '/images/wifiicon.png'
import cloud from '/images/cloud.png'

export const MovieSection = () => {
    return (
        <section className='bg-movie-section mt-16 bg-center bg-no-repeat flex flex-col justify-start'>
            <div className='flex items-center justify-center'>
                <img src={wifi} height={152.7} width={152.7} alt='wifi' className='md:mr-24 mr-8'/>
                <img src={cloud} height={137} width={113} alt='cloud' className='mr-8 md:mr-40'/>
            </div>
        </section>
    )
}