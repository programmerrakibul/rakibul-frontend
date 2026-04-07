"use client";

import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import PlayPrimary from "@/assets/icons/primary/play.png";
import PlayBlack from "@/assets/icons/black/fill/play_black.png";
import { Badge } from "@/components/ui/badge";
import { curriculumData } from "@/data/curriculumData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckBlack from "@/assets/icons/black/fill/check_black.png";
import CheckWhite from "@/assets/icons/white/fill/check_white.png";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
} from "@/components/ui/item";
import { useTheme } from "next-themes";
import EnrollButton from "@/components/ui/enroll-button";
import { TypographyH2 } from "@/components/ui/typography";

const benefitDescriptions: string[] = [
  "6h of videos - Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

const Curriculum = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section className="mt-60">
        <Container className="space-y-25">
          <div className="max-w-136.25 mx-auto text-center space-y-8">
            <HeaderBadge>Course Curriculum</HeaderBadge>
            <TypographyH2>
              Mastering Deep Work: A Structured Path to Peak Productivity
            </TypographyH2>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-25 sm:gap-30 lg:gap-15">
            <Accordion
              type="single"
              defaultValue={curriculumData[0].id}
              className="flex-1 space-y-4"
            >
              {curriculumData.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="overflow-hidden border-none"
                >
                  <AccordionTrigger className="p-6 border-none hover:no-underline group hover:bg-linear-to-r hover:from-transparent hover:via-primary/15 hover:to-transparent hover:from-10% hover:via-50% hover:to-90%">
                    <div className="flex flex-col items-start gap-1">
                      <h4 className="font-medium text-lg">{module.title}</h4>
                      <span className="text-sm text-muted-foreground">
                        {module.duration}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <Separator />

                  <AccordionContent className="p-6">
                    <div className="space-y-4">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id}>
                          <div className="flex items-center justify-between py-6 px-4 rounded-xl hover:bg-linear-to-r hover:from-transparent hover:via-primary/15 hover:to-transparent hover:from-10% hover:via-50% hover:to-90% transition-colors group cursor-pointer">
                            <div className="flex items-center gap-4">
                              <div className="text-primary">
                                {
                                  <AspectRatio
                                    ratio={1 / 1}
                                    className={cn(
                                      "size-8 rounded-full flex items-center justify-center bg-secondary dark:bg-white/30 border border-primary/20 dark:border-none",
                                      lesson.hasPreview &&
                                        "bg-secondary dark:bg-white",
                                    )}
                                  >
                                    <Image
                                      src={
                                        lesson.hasPreview
                                          ? PlayPrimary
                                          : PlayBlack
                                      }
                                      alt="Play Icon"
                                      width={20}
                                      height={20}
                                    />
                                  </AspectRatio>
                                }
                              </div>

                              <div>
                                <p className="text-[17px] text-muted-foreground">
                                  {lesson.title}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              {lesson.hasPreview && (
                                <Badge
                                  variant="secondary"
                                  className="text-primary text-sm px-3.5 py-3"
                                >
                                  Preview
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground tabular-nums">
                                {lesson.duration}
                              </span>
                            </div>
                          </div>
                          <Separator />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="py-10 px-8 gap-16 ring-primary/25 lg:flex-1 lg:sticky lg:top-16 mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Not only video lessons!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-7.5">
                {benefitDescriptions.map((description, index) => (
                  <Item key={index} className="flex items-center gap-3 px-0">
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
                      <ItemDescription className="text-[15px]">
                        {description}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </CardContent>
              <CardFooter>
                <CardAction className="w-full">
                  <EnrollButton size={"lg"} className="w-full" />
                </CardAction>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Curriculum;
