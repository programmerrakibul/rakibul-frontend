import React from "react";
import { Badge } from "./badge";

const HeaderBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Badge variant={"outline"} className="text-[15px] p-3.5 border-y-primary/30">
        <span className="mr-1.5 bg-primary p-1 rounded-full"></span>
        {children}
      </Badge>
    </>
  );
};

export default HeaderBadge;
