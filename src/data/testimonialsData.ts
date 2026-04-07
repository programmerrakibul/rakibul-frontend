import img1 from "@/assets/images/testimonial1.jpg";
import img2 from "@/assets/images/testimonial2.jpg";
import img3 from "@/assets/images/testimonial3.png";
import img4 from "@/assets/images/testimonial4.jpg";

import type { TestimonialDataProps } from "@/types";

export const testimonialsData: TestimonialDataProps[] = [
  {
    id: "1",
    avatar: img2,
    name: "Alex Carter",
    designation: "Freelance Designer",
    description:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    video: null,
  },
  {
    id: "2",
    avatar: img3,
    name: "Daniel Foster",
    designation: "Content creator",
    description: null,
    video: img1,
  },
  {
    id: "3",
    avatar: img4,
    name: "Mark Davidson",
    designation: "Software Developer",
    description:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    video: null,
  },
  {
    id: "4",
    avatar: img2,
    name: "Sarah Chen",
    designation: "Digital Marketer",
    description:
      "This course completely transformed how I approach my workday. The strategies helped me eliminate unnecessary meetings and focus on high-impact tasks. My output has increased significantly.",
    video: null,
  },
  {
    id: "5",
    avatar: img4,
    name: "James Thompson",
    designation: "Startup Founder",
    description: null,
    video: img1,
  },
];
