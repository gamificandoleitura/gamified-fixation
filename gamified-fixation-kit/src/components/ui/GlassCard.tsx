import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function GlassCard({ className, children, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6",
                hoverEffect && "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
