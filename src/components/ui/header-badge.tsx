import React from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

const HeaderBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Badge
        variant={"outline"}
        className={cn(
          "text-[15px] p-4 border-y-primary/30 bg-secondary font-normal",
        )}
      >
        <span className="mr-1.5 bg-primary/90 size-2.5 rounded-full"></span>
        {children}
      </Badge>
    </>
  );
};

export default HeaderBadge;
