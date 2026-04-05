import { cn } from "@/lib/utils";
import { Button } from "./button";
import type { VariantProps } from "class-variance-authority";

interface EnrollButtonProps {
  className?: string;
  size?: VariantProps<typeof Button>["size"];
}

const EnrollButton = ({ className, size = "default" }: EnrollButtonProps) => {
  return (
    <>
      <Button className={cn(className)} size={size}>
        Enroll now
      </Button>
    </>
  );
};

export default EnrollButton;
