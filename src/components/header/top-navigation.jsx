const menuItems = [
    {
        title: 'پیشنهادات',
        href: '/Comments'
    }, {
        title: 'خرید',
        href: '/Shop'
    }, {
        title: 'توضیحات',
        href: '/Information'
    }, {
        title: 'تماس',
        href: '/Contact'
    },
]
export const TopNavigation = () => {
    return (
        <ul className='flex md:gap-x-12 md:mr-12 gap-x-4 mr-0.5 ml-6 '>
            {
                menuItems.map((item) => {
                    return <li key={`navigation-${item.href}`}>
                        <a href={item.href} className='md:text-sm text-xs hover:text-primary transition-colors duration-200 pb-2'>
                            {item.title}
                        </a>
                    </li>
                })
            }
        </ul>
    )
}