import classNames from "classnames";

const sizeClasses = {
    tiny: 'textbox-xs',
    small: 'textbox-sm',
    normal: 'textbox-md',
    large: 'textbox-lg'
}

export const TextBox = ({variant = 'ghost', type = 'text', className, size = 'normal', ...rest}) => {
    const classes = classNames(
        'textbox',
        'md:w-[612px] w-72',
        className,
        {[`textbox-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size}
    )
    return <input type={type} className={classes} {...rest}/>
}
