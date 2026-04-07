"use client";

import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/assets/logo/logo_black.png";
import LogoWhite from "@/assets/logo/logo_white.png";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  const logo = theme === "light" ? LogoBlack : LogoWhite;

  return (
    <>
      <Link href={"/"}>
        <Image
          loading="eager"
          src={logo}
          alt="PPA Logo"
          width={84}
          height={31}
          className="flex w-21"
        />
      </Link>
    </>
  );
};

export default Logo;
