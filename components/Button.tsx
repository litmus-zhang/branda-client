interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    formAction?: (f?: FormData) => void;
    className?: string;
}
export const CustomButton = (props: ButtonProps) => {
    const { text, onClick, type = "button", variant = "primary", size = "md" ,className, ...rest} = props;
    const sizeClass = size === "sm" ? "p-1" : size === "md" ? "p-2" : "p-3";
    const variantClass = variant === "primary" ? "bg-primary text-white" : "bg-secondary text-primary";
    return (
        <button {...rest} className={`${sizeClass} ${variantClass} ${className}`} onClick={onClick} type={type}>
        {text}
        </button>
    );
}