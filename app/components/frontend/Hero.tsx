import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/vercel.svg";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />
            <h2 className="text-2xl">
              Blog<span className="text-primary">Siiv</span>
            </h2>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4">
          <ThemeToggle />
          <LoginLink>
            <Button>Sign in</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="secondary">Sign up</Button>
          </RegisterLink>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-primary text-sm font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
              Ultimate Blogging SaaS for Startup
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
              Setup your Blog{" "}
              <span className="text-primary block">in Minutes!</span>
            </h1>

            <p className="max-w-xl mx-auto text-muted-foreground mt-4">
              Settings up your blog is hard and time consuming. We make it easy
              for your create a blog in minutes.
            </p>

            <div className="flex items-center gap-x-4 w-full  justify-center mt-5">
              <LoginLink>
                <Button variant="secondary">Sign in</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Try for free</Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
