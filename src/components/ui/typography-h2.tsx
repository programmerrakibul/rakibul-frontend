import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH2 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h2
        className={cn(
          className,
          "text-[40px] font-medium text-center text-foreground",
        )}
      >
        {children}
      </h2>
    </>
  );
};

export default TypographyH2;
