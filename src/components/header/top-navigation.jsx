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
        <ul className='flex gap-x-12 mr-12'>
            {
                menuItems.map((item) => {
                    return <li key={`navigation-${item.href}`}>
                        <a href={item.href} className='hover:text-primary transition-colors pb-2'>
                            {item.title}
                        </a>
                    </li>
                })
            }
        </ul>
    )
}