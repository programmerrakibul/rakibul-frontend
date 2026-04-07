import Image from "next/image";
import { Button } from "./button";
import PlayIcon from "@/assets/icons/primary/play.png";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  className?: string;
}

const PlayButton = ({ className }: PlayButtonProps) => {
  return (
    <>
      <Button
        variant={"secondary"}
        size={"icon"}
        className={cn(
          "size-12 sm:size-17.5 md:size-22 rounded-full bg-white ring-4 ring-white/40 hover:bg-white/85 z-20",
          className,
        )}
      >
        <Image
          src={PlayIcon}
          alt="Play Icon"
          width={24}
          height={24}
          className="size-6 sm:size-8 md:size-10"
        />
      </Button>
    </>
  );
};

export default PlayButton;
