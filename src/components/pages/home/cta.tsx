"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
} from "@/components/ui/item";
import CheckBlack from "@/assets/icons/black/fill/check_black.png";
import CheckWhite from "@/assets/icons/white/fill/check_white.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import EnrollButton from "@/components/ui/enroll-button";
import { TypographyH2 } from "@/components/ui/typography";

const ctaData: string[] = [
  "Bonus: 1:1 coaching session to boost focus.",
  "Discount: Save 30% when you enroll now!",
  "6h of videos - Step-by-step deep work strategies.",
  "Templates & Trackers - Stay on track effortlessly.",
  "Live Q&As - Expert guidance & accountability.",
  "Exclusive Community - Connect with others.",
];

const CTA = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section className="mt-30">
        <Container className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
          <Card className="flex-1 justify-center py-10 px-8 sm:p-15 md:py-10 space-y-15 ring-0 shadow">
            <CardHeader className="grid-cols-1 place-items-start gap-5 px-0">
              <HeaderBadge>Introducing</HeaderBadge>
              <CardTitle>
                <TypographyH2 className="text-start!">
                  The Deep Work <br className="hidden" /> Blueprint
                </TypographyH2>
              </CardTitle>
              <p className="text-muted-foreground text-base">
                What extra you will get if you enroll now
              </p>
            </CardHeader>
            <CardContent className="space-y-7.5 px-0">
              {ctaData.slice(0, 2).map((data, index) => (
                <Item key={index} className="flex items-center gap-3 p-0">
                  <ItemMedia variant={"icon"}>
                    <AspectRatio
                      ratio={1 / 1}
                      className="flex items-center justify-center bg-secondary size-8 rounded-full border-y border-primary/40"
                    >
                      <Image
                        src={isDark ? CheckWhite : CheckBlack}
                        alt="Check Icon"
                        width={16}
                        height={16}
                      />
                    </AspectRatio>
                  </ItemMedia>
                  <ItemContent>
                    <ItemDescription className="text-sm">
                      {data}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </CardContent>
          </Card>

          <Card className="flex-1 py-10 px-8 ring-primary/20 space-y-16">
            <CardHeader className="gap-y-10 px-0">
              <CardTitle className="flex items-center justify-between gap-1.5">
                <h4 className="inline-block text-[40px] sm:text-[44px] lg:text-[52px] font-medium">
                  $349{" "}
                  <span className="text-xl sm:text-2xl lg:text-[28px] text-muted-foreground relative">
                    $500
                    <span className="absolute w-full h-0.5 top-[50%] left-0 bg-destructive rotate-10"></span>
                  </span>
                </h4>
                <Badge className="text-[15px] font-medium text-white px-4 py-3.5">
                  30% off
                </Badge>
              </CardTitle>
              <p className="text-muted-foreground text-base">
                30% off until 4d : 2h : 41m : 17s
              </p>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-7.5 flex-1 px-0">
              {ctaData.slice(2, 6).map((data, index) => (
                <Item key={index} className="flex items-center gap-3 p-0">
                  <ItemMedia variant={"icon"}>
                    <AspectRatio
                      ratio={1 / 1}
                      className="flex items-center justify-center bg-secondary size-8 rounded-full border-y border-primary/40"
                    >
                      <Image
                        src={isDark ? CheckWhite : CheckBlack}
                        alt="Check Icon"
                        width={16}
                        height={16}
                      />
                    </AspectRatio>
                  </ItemMedia>
                  <ItemContent>
                    <ItemDescription className="text-sm">
                      {data}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </CardContent>
            <CardFooter className="px-0">
              <CardAction className="w-full">
                <EnrollButton size={"lg"} className="w-full" />
              </CardAction>
            </CardFooter>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default CTA;
