import classNames from "classnames";

const sizeClasses = {
    tiny: 'btn-xs',
    small: 'btn-sm',
    normal: '',
    large: 'btn-lg'
}

const shapeClasses = {
    wide: 'btn-wide',
    full: 'btn-block',
    square: 'btn-square',
    default: ''
}
export const Button = ({
                           variant,
                           size = 'normal',
                           isDisabled = false,
                           isOutline = false,
                           shape = "default",
                           isLoading = false,
                           loadingType = "spinner",
                           loadingText = 'درحال ارسال درخواست...',
                           type = "button",
                           children,
                           className,
                           ...rest
                       }) => {
    const classes = classNames(
        'btn',
        className,
        {'btn-outline': isOutline},
        {'pointer-events-none opacity-80': isLoading},
        {[`btn-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size},
        {[`${shapeClasses[shape]}`]: shape}
    )
    return (
        <button type={type} disabled={isDisabled} {...rest} className={classes}>
            {isLoading ? loadingText : children}
        </button>
    )
}