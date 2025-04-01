import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">URL Not Found</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        The shortened URL you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
