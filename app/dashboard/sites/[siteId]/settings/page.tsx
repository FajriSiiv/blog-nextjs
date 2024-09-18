import { DeleteSite } from "@/app/actions";
import UploadImageForm from "@/app/components/dashboard/forms/uploadImageForm";
import SubmitButton from "@/app/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SettingsSiteRoute({
  params,
}: {
  params: { siteId: string };
}) {
  console.log(params.siteId);

  return (
    <>
      <div className="flex items-center gap-x-2">
        <Button size="icon" variant="outline">
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h3 className="font-semibold text-xl">Go Back</h3>
      </div>

      <UploadImageForm siteId={params.siteId} />

      <Card className="border-red-500 bg-red-500/10">
        <CardHeader>
          <CardTitle className="text-red-500">Danger</CardTitle>
          <CardDescription>
            This will delete your site and articles. Click the button below to
            delete everything.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <form action={DeleteSite}>
            <input type="hidden" name="siteId" value={params.siteId} />
            <SubmitButton text="Delete Everything" variant="destructive" />
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
