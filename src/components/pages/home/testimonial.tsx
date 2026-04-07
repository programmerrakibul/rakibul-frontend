"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import { testimonialsData } from "@/data/testimonialsData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import PlayButton from "@/components/ui/play-button";
import { TypographyH1 } from "@/components/ui/typography";

const Testimonial = () => {
  return (
    <>
      <section id="testimonials" className="mt-50 md:mt-60">
        <Container className="space-y-40">
          <div className="max-w-120 mx-auto text-center space-y-6">
            <HeaderBadge>Testimonials</HeaderBadge>
            <TypographyH1>Real Results from Real People</TypographyH1>
          </div>

          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/82">
                Join with 5K other students
              </h2>

              <div className="flex gap-3">
                <CarouselPrevious className="relative size-14 top-7 left-0 border-none bg-secondary dark:bg-secondary" />
                <CarouselNext className="relative size-14 top-7 left-0 border-none bg-secondary dark:bg-secondary" />
              </div>
            </div>

            <CarouselContent>
              {testimonialsData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/1 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="min-h-100 ring-0 p-0 border border-primary/12 relative rounded-3xl gap-6">
                    {item.video && (
                      <>
                        <Image
                          src={item.video}
                          alt={item.name}
                          width={1000}
                          height={400}
                          className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        />
                        <div className="hidden absolute top-0 left-0 w-full h-full bg-white/25 dark:bg-black/25 z-10"></div>
                        <PlayButton className="absolute top-[50%] left-[40%] -translate-y-[40%]" />
                      </>
                    )}
                    <CardHeader className="px-6 pt-8 z-10">
                      <Avatar>
                        <AvatarImage
                          src={item.avatar.src}
                          alt={item.name}
                          width={40}
                          height={40}
                        />
                      </Avatar>
                    </CardHeader>
                    {item.description && (
                      <CardContent className="px-6">
                        <CardDescription>
                          <p className="text-[17px] text-muted-foreground">
                            {item.description}
                          </p>
                        </CardDescription>
                      </CardContent>
                    )}
                    <CardFooter className="flex-1 flex-col items-start justify-end z-10 pb-8 px-6 space-y-1">
                      <h5 className="text-xl dark:opacity-82">{item.name}</h5>
                      <p className="text-[15px] dark:text-muted-foreground">
                        {item.designation}
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
