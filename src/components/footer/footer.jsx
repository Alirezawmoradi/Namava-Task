import {IconEmail, IconMessage, IconPhone} from "../icons/icons";

export const Footer = () => {
    return (
        <>
            <div className='flex lg:px-48 md:px-16 px-3'>
            <div className='gradient-first mb-0 mt-2'></div>
            <div className='gradient-second mb-0 mt-2'></div>
            </div>
            <footer
                className="container bg-base-100 text-base-content lg:w-[1449px] border border-base-100 border-opacity-4 flex flex-col lg:flex-row items-center gap-5 px-0  lg:px-12 xl:px-40 py-20 drop-shadow">
                <div className="flex flex-1 flex-col md:flex-row sm:flex-row gap-5 lg:gap-6 md:gap-x-60 sm:gap-x-40 whitespace-nowrap">
                    <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start sm:place-items-start text-sm font-bold">
                        <a className="cursor-pointer hover:text-primary transition-colors duration-200">
                            پیشنهاد های جشنواره
                        </a>
                        <a className="cursor-pointer hover:text-primary transition-colors duration-200">
                            درباره پیشنهاد
                        </a>
                        <a className="cursor-pointer hover:text-primary transition-colors duration-200">
                            توضیحات بیشتر
                        </a>
                        <a className="cursor-pointer hover:text-primary transition-colors duration-200">
                            ارتباط با ما
                        </a>
                    </div>

                    <div className="grid  basis-36 gap-3 place-items-center md:place-items-start text-sm font-bold">
                        <div className='flex flex-col gap-5'>
                            <div className='flex justify-between'>
                                <p>91000000</p>
                                <IconPhone fill='#F36339' width={25} height={25}/>
                            </div>
                            <div className='flex justify-between'>
                                <p className='ml-16'>info@shatel.ir</p>
                                <div className='bg-icon-bg w-[25px] h-[25px] relative'>
                                    <IconEmail fill='white' width={24} height={25} className='-mx-1 my-1.5'/>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <p>گفت و گوی آنلاین</p>
                                <div className='bg-icon-bg w-[25px] h-[25px] relative'>
                                    <IconMessage fill='white' width={24} height={25} className='-mx-1 my-1.5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}