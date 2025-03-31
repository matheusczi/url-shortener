"use client";

import UrlForm from "@/components/UrlForm";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Shorten your long URLs into easy-to-share links.
        </p>
        <UrlForm onSuccess={() => {}} />
      </section>
    </main>
  );
}
