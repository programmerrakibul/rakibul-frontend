"use client";

import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import TypographyH2 from "@/components/ui/typography-h2";
import BulbBlack from "@/assets/icons/black/fill/bulb_black.png";
import BrainBlack from "@/assets/icons/black/fill/brain_black.png";
import RouteBlack from "@/assets/icons/black/fill/route_black.png";
import CheckBlack from "@/assets/icons/black/fill/check_black.png";
import BulbWhite from "@/assets/icons/white/fill/bulb_white.png";
import BrainWhite from "@/assets/icons/white/fill/brain_white.png";
import RouteWhite from "@/assets/icons/white/fill/route_white.png";
import CheckWhite from "@/assets/icons/white/fill/check_white.png";
import { useTheme } from "next-themes";
import Image, { type StaticImageData } from "next/image";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BenefitsData {
  icon: StaticImageData;
  title: string;
  alt: string;
}

const Benefits = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const benefitsData: BenefitsData[] = [
    {
      icon: isDark ? BulbWhite : BulbBlack,
      title: "Develop laser-sharp focus & eliminate distractions.",
      alt: "Bulb Icon",
    },
    {
      icon: isDark ? BrainWhite : BrainBlack,
      title: "Master deep work techniques for smarter productivity.",
      alt: "Brain Icon",
    },
    {
      icon: isDark ? CheckWhite : CheckBlack,
      title: "Overcome procrastination & get more done.",
      alt: "Check Icon",
    },
    {
      icon: isDark ? RouteWhite : RouteBlack,
      title: "Build lasting habits for long-term success.",
      alt: "Route Icon",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-24">
          <div className="space-y-8 max-w-150 mx-auto text-center">
            <HeaderBadge>The Deep Work Blueprint</HeaderBadge>
            <TypographyH2>
              A self-paced, results-driven course designed to help you
            </TypographyH2>
          </div>

          <div className="grid grid-cols-1 grid-rows-4 gap-8 place-items-center">
            {benefitsData.map((benefit, i) => (
              <div
                key={i}
                className="flex items-stretch justify-between gap-8 sm:gap-14 max-w-95"
              >
                <div className="flex items-center justify-center flex-col gap-4">
                  <span className="flex items-center justify-center bg-primary size-5 rounded-full"></span>
                  <Separator
                    className={
                      "bg-linear-to-b from-transparent via-primary to-transparent w-0.5 flex-1 mx-auto"
                    }
                    orientation="vertical"
                  />
                </div>

                <div className="space-y-5">
                  <AspectRatio
                    ratio={1 / 1}
                    className="size-16 rounded-full border-y-[0.5px] border-primary/30 bg-secondary flex items-center justify-center"
                  >
                    <Image
                      src={benefit.icon}
                      alt={benefit.alt}
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </AspectRatio>
                  <p className="text-2xl">{benefit.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benefits;
