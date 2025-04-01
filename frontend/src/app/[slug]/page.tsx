"use client";

import { API_URL, getUrlBySlug } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();

  useEffect(() => {
    async function redirect() {
      try {
        const { slug } = await params;
        await getUrlBySlug(slug);
        window.location.href = `${API_URL}/url/${slug}`;
      } catch (error) {
        console.error(error);
        router.push("/404");
      }
    }

    redirect();
  }, [params, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-xl mb-4">Redirecting...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
