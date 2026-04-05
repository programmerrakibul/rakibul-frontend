import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH1 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h1
        className={cn(
          className,
          "text-[32px] sm:text-[42px] md:text-[52px] font-medium text-center text-foreground",
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default TypographyH1;
