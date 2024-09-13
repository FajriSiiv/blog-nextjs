import Link from "next/link";
import React from "react";
import DashboarItems from "../components/dashboard/DashboarItems";
import { DollarSign, Globe, Home } from "lucide-react";
import { ThemeToggle } from "../components/dashboard/ThemeToggle";

export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSign,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2  font-semibold">
              <h3 className="text-2xl">
                Siiv<span className="text-primary">Tools</span>
              </h3>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 font-mendium lg:px-4">
              <DashboarItems />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 px-4 lg:h-[60px] lg:px-6 items-center gap-4 border-b bg-muted/40">
          <div className="ml-auto flex items-center gap-x-5">
            <ThemeToggle />
          </div>
        </header>
      </div>
    </div>
  );
}
