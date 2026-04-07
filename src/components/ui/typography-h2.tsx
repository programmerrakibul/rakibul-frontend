import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH2 = ({ children, className }: TypographyProps) => {
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

export default TypographyH2;
