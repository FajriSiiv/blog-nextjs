"use client";
import { UploadDropzone } from "@/app/utils/uploadthing";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import SubmitButton from "../SubmitButtons";
import { toast } from "sonner";
import { UpdateImage } from "@/app/actions";

interface UploadImageProps {
  siteId: string;
}

export default function UploadImageForm({ siteId }: UploadImageProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image</CardTitle>
        <CardDescription>
          This is image of your site. you can change it here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Upload Image"
            width={200}
            height={200}
            className="object-cover size-[200px] rounded-lg"
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              toast.success("Image hasa been uploaded");
            }}
            onUploadError={() => {
              toast.error("Something went wrong upload image.");
            }}
          />
        )}
      </CardContent>
      <CardFooter>
        <form action={UpdateImage}>
          <input type="hidden" name="siteId" value={siteId} />
          <input type="hidden" name="imageUrl" value={imageUrl} />

          <SubmitButton text="Change Image" />
        </form>
      </CardFooter>
    </Card>
  );
}
