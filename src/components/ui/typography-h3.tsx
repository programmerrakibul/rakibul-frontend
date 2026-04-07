import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH3 = ({ children, className }: TypographyProps) => {
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

export default TypographyH3;
