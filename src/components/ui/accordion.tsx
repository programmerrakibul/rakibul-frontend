"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/lib/utils";

import CaretDownBlack from "@/assets/icons/black/fill/caret_down_black.png";
import CaretDownWhite from "@/assets/icons/white/fill/caret_down_white.png";
import { useTheme } from "next-themes";
import Image from "next/image";

type BaseAccordionProps = Omit<
  AccordionPrimitive.Root.Props,
  "defaultValue" | "value" | "onValueChange"
>;

type AccordionProps = BaseAccordionProps & {
  defaultValue?: string | string[] | null;
  value?: string | string[] | null;
  onValueChange?: (value: string[]) => void;
  type?: "single" | "multiple";
};

function Accordion({
  className,
  defaultValue,
  value,
  ...props
}: AccordionProps) {
  const normalizedDefaultValue =
    defaultValue == null
      ? undefined
      : typeof defaultValue === "string"
        ? [defaultValue]
        : defaultValue;

  const normalizedValue =
    value == null ? undefined : typeof value === "string" ? [value] : value;

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      defaultValue={normalizedDefaultValue}
      value={normalizedValue}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between gap-6 rounded-md border border-transparent py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-8 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}

        <Image
          src={isDark ? CaretDownWhite : CaretDownBlack}
          alt="Caret Icon"
          width={32}
          height={32}
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:rotate-180 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-4 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
