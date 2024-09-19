import prisma from "./db";

export async function checkingSlug(slug: string) {
  const existingSlug = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });

  if (existingSlug) {
    return {
      status: "error",
      message: "Slug already exists. Please choose a different slug.",
    };
  }

  return {
    status: "success",
    message: "Slug is available.",
  };
}
