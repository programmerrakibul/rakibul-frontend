import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH4 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h4 className={cn("text-2xl font-normal", className)}>{children}</h4>
    </>
  );
};

export default TypographyH4;
