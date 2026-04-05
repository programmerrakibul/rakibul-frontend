import { cn } from "@/lib/utils";
import type { TypographyProps } from "@/types";

const TypographyH4 = ({ children, className }: TypographyProps) => {
  return (
    <>
      <h4 className={cn(className, "text-2xl font-normal")}>{children}</h4>
    </>
  );
};

export default TypographyH4;
