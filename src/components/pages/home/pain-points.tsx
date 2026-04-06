import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import Image, { type StaticImageData } from "next/image";
import img1 from "@/assets/images/p1.jpg";
import img2 from "@/assets/images/p2.jpg";
import img3 from "@/assets/images/p3.jpg";
import img4 from "@/assets/images/p4.png";
import img5 from "@/assets/images/p5.jpg";
import img6 from "@/assets/images/p6.jpg";
import img7 from "@/assets/images/p7.jpg";
import img8 from "@/assets/images/p8.jpg";
import img9 from "@/assets/images/p9.jpg";
import img10 from "@/assets/images/p10.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TypographyH2 from "@/components/ui/typography-h2";
import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import TypographyH3 from "@/components/ui/typography-h3";

interface ImgDetails {
  src: StaticImageData;
  alt: string;
}

const imgDetails: ImgDetails[] = [
  { src: img1, alt: "Man covering face in frustration" },
  { src: img2, alt: "Man in front of computer screen" },
  { src: img3, alt: "Man in front of computer screen" },
  { src: img4, alt: "Man in front of computer screen" },
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
  { src: img8, alt: "Man in front of computer screen" },
  { src: img9, alt: "Man in front of computer screen" },
  { src: img10, alt: "Man in front of computer screen" },
];

const PainPoints = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container className="space-y-20">
        <div className="flex flex-col items-center justify-items-center gap-8">
          <div className="text-center mx-auto max-w-205 space-y-8">
            <HeaderBadge>Are Distractions Holding You Back?</HeaderBadge>

            <TypographyH2>
              If you struggle to focus, feel overwhelmed by endl
              <span className="text-foreground/60">
                ess tasks, or procrastinate instead of making progress,
                you&apos;re not alone.
              </span>
            </TypographyH2>
          </div>

          <div className="max-w-142.5 grid grid-cols-3 gap-2">
            {imgDetails.slice(0, 3).map((img, i) => (
              <AspectRatio
                key={i}
                ratio={4 / 3}
                className="relative rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={180}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 items-stretch gap-4">
          <div className="lg:col-span-4 hidden lg:block">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={imgDetails[3].src}
                alt={imgDetails[3].alt}
                width={360}
                height={640}
                className="w-full rounded-3xl object-cover h-160"
              />
            </AspectRatio>
          </div>

          <div className="col-span-full lg:col-span-8 bg-secondary rounded-3xl p-6 sm:p-10 space-y-20">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <HeaderBadge>No worries</HeaderBadge>
              <div className="space-y-2">
                <AvatarGroup className="sm:justify-end">
                  {imgDetails.slice(4, 7).map((img, i) => (
                    <Avatar key={i} size="lg">
                      <AvatarImage src={img.src.src} alt={img.alt} />
                    </Avatar>
                  ))}
                </AvatarGroup>
                <p className="opacity-75 sm:text-end">
                  Join with 5K other students
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div className="flex-1 space-y-5">
                <p className="opacity-80 text-[17px]">
                  The ability to concentrate deeply is the ultimate productivity
                  hack
                </p>
                <TypographyH3 className="text-start!">
                  And fortunately it’s a skill you can train & develop.
                </TypographyH3>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-3 sm:grid-cols-1 place-items-center sm:place-items-end gap-2 max-h-92.5">
                  {imgDetails.slice(7, 10).map((img, i) => (
                    <AspectRatio
                      key={i}
                      ratio={1 / 1}
                      className="relative rounded-xl overflow-hidden group size-18.75 sm:size-25"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={118}
                        height={118}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AspectRatio>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;
