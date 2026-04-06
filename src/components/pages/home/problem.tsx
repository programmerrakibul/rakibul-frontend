import Container from "@/components/ui/container";
import HeaderBadge from "@/components/ui/header-badge";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/images/p1.jpg";
import img2 from "@/assets/images/p2.jpg";
import img3 from "@/assets/images/p3.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TypographyH2 from "@/components/ui/typography-h2";

interface ImgDetails {
  src: StaticImageData;
  alt: string;
}

const imgDetails: ImgDetails[] = [
  { src: img1, alt: "Man covering face in frustration" },
  { src: img2, alt: "Man in front of computer screen" },
  { src: img3, alt: "Man in front of computer screen" },
];

const Problem = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
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
            {imgDetails.map((img, i) => (
              <AspectRatio
                key={i}
                ratio={4 / 3}
                className="relative rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Problem;
