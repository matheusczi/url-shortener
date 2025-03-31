import { redirect, notFound } from "next/navigation";
import { getUrlBySlug } from "@/lib/api";

export default async function RedirectPage({
  params,
}: {
  params: { slug: string };
}) {
  const url = await getUrlBySlug(params.slug);

  if (!url) {
    notFound();
  }

  redirect(url.originalUrl);
}
