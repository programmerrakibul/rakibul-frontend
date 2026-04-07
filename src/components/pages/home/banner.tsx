import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import EnrollButton from "@/components/ui/enroll-button";
import TypographyH1 from "@/components/ui/typography-h1";
import Image from "next/image";
import BannerThumbnail from "@/assets/images/banner_thumbnail .png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HeaderBadge from "@/components/ui/header-badge";
import PlayButton from "@/components/ui/play-button";

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
            <PlayButton className="absolute top-[50%] left-[50%] -translate-y-[50%]" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
