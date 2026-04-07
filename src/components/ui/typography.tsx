import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

export const TypographyH1 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h1
        role="heading"
        className={cn(
          "text-[32px] sm:text-[42px] md:text-[52px] font-medium text-center text-foreground",
          className,
        )}
      >
        {children}
      </h1>
    </>
  );
};

export const TypographyH2 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h2
        className={cn(
          "text-[28px] md:text-[40px] font-medium text-center text-foreground",
          className,
        )}
      >
        {children}
      </h2>
    </>
  );
};

export const TypographyH3 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h3
        className={cn(
          "text-[28px] font-medium text-foreground text-center",
          className,
        )}
      >
        {children}
      </h3>
    </>
  );
};

export const TypographyH4 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h4 className={cn("text-2xl font-normal", className)}>{children}</h4>
    </>
  );
};
