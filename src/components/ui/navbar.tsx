"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import EnrollButton from "./enroll-button";
import Container from "./container";
import { Separator } from "./separator";
import type { TNavLink } from "@/types";
import Image from "next/image";
import MenuBlack from "@/assets/icons/black/line/menu_black.png";
import MenuWhite from "@/assets/icons/white/line/menu_white.png";
import { useTheme } from "next-themes";

const navLinks: TNavLink[] = [
  { href: "#hero", label: "Overview" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const NavLinkElements = navLinks.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      className="text-[15px] font-medium text-foreground/90 transition-colors hover:text-foreground"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl">
      <Container>
        <nav className="flex h-23 lg:h-23.75 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-x-10 lg:flex">
            {NavLinkElements}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <EnrollButton size={"lg"} className="hidden lg:inline-flex" />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden bg-secondary size-15 rounded-full"
                  >
                    <Image
                      src={isDark ? MenuWhite : MenuBlack}
                      alt="Hamburger Menu Icon Image"
                      width={28}
                      height={28}
                    />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-75 sm:w-95 p-6">
                <div className="flex flex-col gap-4 pt-10">
                  {NavLinkElements}
                  <EnrollButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
      <Separator />
    </header>
  );
};

export default Navbar;
