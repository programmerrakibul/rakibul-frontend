"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import EnrollButton from "./enroll-button";
import Container from "./container";
import { Separator } from "./separator";

import type { TNavLink } from "@/types";

const navLinks: TNavLink[] = [
  { href: "#overview", label: "Overview" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLinkElements = navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="text-base font-medium text-foreground/90 transition-colors hover:text-foreground"
    >
      {link.label}
    </Link>
  ));

  return (
    <section className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-x-10 md:flex">
            {NavLinkElements}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <EnrollButton size={"lg"} className="hidden md:inline-flex" />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden bg-secondary size-12 rounded-full"
                  >
                    <Menu className="size-6" />
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
      <Separator
        className={
          "bg-linear-to-l from-background via-primary/85 to-background"
        }
      />
    </section>
  );
}
