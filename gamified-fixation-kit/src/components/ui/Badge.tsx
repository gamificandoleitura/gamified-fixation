import { ComponentProps } from "react";

export function Badge({ children, className }: ComponentProps<"span">) {
    return (
        <span className={`inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary shadow-[0_0_10px_rgba(0,240,255,0.2)] ${className}`}>
            {children}
        </span>
    );
}
