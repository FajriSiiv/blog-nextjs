import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

interface EmptyProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({
  title,
  buttonText,
  description,
  href,
}: EmptyProps) {
  return (
    <div className="flex flex-col gap-3  items-center p-8 border border-dashed text-center animate-in fade-in-50 rounded-lg">
      <div className="w-fit p-8 rounded-full bg-primary/10">
        <FileIcon className="size-10 text-primary" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      <Button asChild>
        <Link href={href}>
          <PlusCircle className="mr-2 size-4" /> {buttonText}
        </Link>
      </Button>
    </div>
  );
}
