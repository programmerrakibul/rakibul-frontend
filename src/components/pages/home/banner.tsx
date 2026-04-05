"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import EnrollButton from "@/components/ui/enroll-button";
import TypographyH1 from "@/components/ui/typography-h1";
import Image from "next/image";
import BannerThumbnail from "@/assets/images/banner_thumbnail .png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PlayIcon from "@/assets/icons/primary/play.png";
import HeaderBadge from "@/components/ui/header-badge";

const Banner = () => {
  return (
    <>
      <section className="relative banner_texture">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-background to-primary/75 from-30% to-100% z-0"></div>
        <Container className="flex flex-col items-center gap-16 pt-28 pb-8 md:pb-14 z-10">
          <div className="space-y-8 z-10">
            <div className="mx-auto max-w-145 space-y-5 text-center">
              <HeaderBadge>30% off until 4d : 2h : 41m : 17s</HeaderBadge>
              <TypographyH1>
                Master Focus & Get More Done in Less Time
              </TypographyH1>
              <p className="opacity-80">
                A step-by-step system to eliminate procrastination, train your
                brain for deep work, and boost productivity effortlessly.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <EnrollButton />
              <Button variant={"secondary"}>Curriculum</Button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={BannerThumbnail}
                alt="Banner Thumbnail"
                width={900}
                height={420}
                className="w-full object-cover rounded-2xl"
                loading="eager"
              />
            </AspectRatio>
            <Button
              variant={"secondary"}
              size={"icon"}
              className={
                "absolute top-[50%] left-[50%] -translate-y-[50%] size-12 sm:size-17.5 md:size-22 rounded-full bg-white ring-4 ring-white/40 hover:bg-white/85"
              }
            >
              <Image
                src={PlayIcon}
                alt="Play Icon"
                width={24}
                height={24}
                className="size-6 sm:size-8 md:size-10"
              />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
