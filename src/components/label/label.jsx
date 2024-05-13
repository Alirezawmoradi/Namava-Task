import classNames from "classnames";

export const Label = ({children, variant = "base-content", className, ...rest}) => {
    const classes = classNames(
        'label',
        className
    )
    return (
        <label className={classes} {...rest}>{children}
            <span className="text-required mr-2">*</span>
        </label>
    )
}