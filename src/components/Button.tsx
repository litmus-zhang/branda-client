interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}
export const CustomButton = (props: ButtonProps) => {
    const { text, onClick, type = "button", variant = "primary", size = "md" } = props;
    const sizeClass = size === "sm" ? "p-1" : size === "md" ? "p-2" : "p-3";
    const variantClass = variant === "primary" ? "bg-primary text-white" : "bg-secondary text-primary";
    return (
        <button className={`${sizeClass} ${variantClass}`} onClick={onClick} type={type}>
        {text}
        </button>
    );
}