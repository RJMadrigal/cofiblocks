import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const buttonVariants = cva(
	"w-[7.8125rem] h-[3rem] rounded-lg px-4 py-[0.875rem] gap-2 border-t border-x-0 border-b-0 font-inter",
	{
		variants: {
			variant: {
				primary: "bg-secondary hover:bg-secondary-light text-black",
				secondary: "bg-primary hover:bg-primary-light text-white",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
	onClick?: () => void;
	disabled?: boolean;
	children: ReactNode;
	type?: "button" | "submit" | "reset";
}

export function Button({
	onClick,
	disabled = false,
	children,
	type = "button",
	variant,
}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={buttonVariants({ variant })}
		>
			{children}
		</button>
	);
}
