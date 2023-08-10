import { twMerge } from "tailwind-merge";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

export default function Button({
    className,
    children,
    ...props
}: ActionButtonProps){
    return (
        <button className={twMerge('rounded-full flex justify-center items-center transition-all duration-300 active:transition-none', className)} {...props}>
            {children}
        </button>
    )
};