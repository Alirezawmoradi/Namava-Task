export const BaseIcon = ({
                             color = 'currentColor',
                             width = 24,
                             height = 24,
                             viewBox = '0 0 24 24',
                             children,
                             ...rest
                         }) => {
    return <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox={viewBox}
        fill='none'
        {...rest}
    >
        {children}
    </svg>
}