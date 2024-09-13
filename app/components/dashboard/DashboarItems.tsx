"use client";
import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboarItems() {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            pathName == item.href
              ? "bg-muted text-primary"
              : "text-muted-foreground bg-none",
            "rounded-lg px-3 py-2 transition-all flex items-center gap-3 hover:text-primary/70"
          )}
        >
          <item.icon className="size-4" />
          {item.name}
        </Link>
      ))}
    </>
  );
}
