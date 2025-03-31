import { Url, CreateUrlDto } from "@/types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

export async function shortenUrl(data: CreateUrlDto): Promise<Url> {
  const response = await fetch(`${API_URL}/url/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  return response.json();
}

export async function getUrlBySlug(slug: string): Promise<Url> {
  try {
    const response = await fetch(`${API_URL}/url/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("URL not found");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching URL:", error);
    throw error;
  }
}
