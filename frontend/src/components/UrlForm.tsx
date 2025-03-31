"use client";

import { useState } from "react";
import { shortenUrl } from "@/lib/api";

export default function UrlForm({ onSuccess }: { onSuccess: () => void }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a URL");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const result = await shortenUrl({ originalUrl: url });
      const baseUrl = window.location.origin;
      setShortenedUrl(`${baseUrl}/${result.slug}`);
      setUrl("");
      onSuccess();
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium mb-1">
            Enter a long URL
          </label>
          <div className="flex gap-2">
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/very/long/url"
              className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten"}
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        {shortenedUrl && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p className="text-sm font-medium mb-2">Your shortened URL:</p>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-600 p-2 rounded border">
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 truncate flex-1"
              >
                {shortenedUrl}
              </a>
              <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-md transition-colors"
                type="button"
              >
                {copySuccess ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
