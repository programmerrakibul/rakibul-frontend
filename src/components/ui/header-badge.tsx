import React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeaderBadge = ({ children, className }: Props) => {
  return (
    <>
      <Badge
        variant={"outline"}
        className={cn(
          "text-[15px] p-4 border-y-primary/30 bg-secondary font-normal",
          className,
        )}
      >
        <span className="mr-1.5 bg-primary/90 size-2.5 rounded-full"></span>
        {children}
      </Badge>
    </>
  );
};

export default HeaderBadge;
