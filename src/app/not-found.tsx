"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[60dvh] flex items-center justify-center py-12">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white dark:bg-zinc-900">
        <CardContent className="pt-12 pb-10 px-8 text-center">
          <div className="mb-8">
            <div className="text-[130px] font-black tracking-[-0.04em] text-transparent bg-clip-text bg-linear-to-b from-zinc-900 via-zinc-800 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500 leading-none">
              404
            </div>
            <p className="text-2xl font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
              Page Not Found
            </p>
          </div>

          <p className="text-muted-foreground mb-10 max-w-70 mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to another location.
          </p>

          <Separator className="my-8" />

          <div className="flex items-center justify-center gap-4">
            <Button size="lg">
              <Link
                href="/"
                className="flex items-center justify-center gap-1.5"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className=" text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default NotFound;
