import { twMerge } from "tailwind-merge";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-full transition-all duration-300 active:transition-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
