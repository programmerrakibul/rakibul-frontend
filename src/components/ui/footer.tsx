import { ImgDetails } from "../pages/home/pain-points";
import { Avatar, AvatarGroup, AvatarImage } from "./avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from "./card";
import Container from "./container";
import img5 from "@/assets/images/p5.jpg";
import img6 from "@/assets/images/p6.jpg";
import img7 from "@/assets/images/p7.jpg";
import ArrowRight from "@/assets/icons/primary/arrow_right.png";
import { AspectRatio } from "./aspect-ratio";
import Image from "next/image";
import { Button } from "./button";
import { Separator } from "./separator";
import { TNavLink } from "@/types";
import Link from "next/link";
import { TypographyH2 } from "./typography";

const links: TNavLink[] = [
  {
    label: "Terms & conditions",
    href: "#",
  },
  {
    label: "Refund policy",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
];

const avatarDetails: ImgDetails[] = [
  {
    src: img5,
    alt: "Man with beard wearing black shirt, smiling at the camera",
  },
  {
    src: img6,
    alt: "Man with glasses wearing blue shirt, smiling at the camera",
  },
  {
    src: img7,
    alt: "Man wearing grey t-shirt, smiling at the camera",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary mt-30">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-20">
            <div>
              <TypographyH2 className="md:text-start">
                The Deep <br /> Work Blueprint
              </TypographyH2>
              <p className="text-muted-foreground text-center md:text-start">
                Master Focus & Get More <br className="md:hidden" /> Done in
                Less Time
              </p>
            </div>
            <Card className="sm:min-w-[320px] p-5 rounded-3xl bg-primary gap-16">
              <CardHeader className="px-0">
                <AvatarGroup className="*:data-[slot=avatar]:ring-primary">
                  {avatarDetails.map((img, i) => (
                    <Avatar key={i} size="lg">
                      <AvatarImage src={img.src.src} alt={img.alt} />
                    </Avatar>
                  ))}
                </AvatarGroup>
                <CardAction>
                  <Button size="icon">
                    <AspectRatio
                      ratio={1 / 1}
                      className="size-10 flex items-center justify-center bg-white rounded-full"
                    >
                      <Image
                        src={ArrowRight}
                        alt="Arrow Right"
                        width={24}
                        height={24}
                      />
                    </AspectRatio>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="px-0">
                <CardDescription>
                  <p className="text-white text-[17px]">
                    Join with 5K other students
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div className="text-muted-foreground flex flex-col lg:flex-row-reverse items-center justify-between gap-10 py-8">
            <div className="flex items-center flex-wrap justify-evenly gap-8">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-[15px] hover:underline transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-[15px]">© Copyright 2024, All Rights Reserved</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
