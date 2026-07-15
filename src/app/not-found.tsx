import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
        404
      </span>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-gray-300">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-100 transition-all hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
      >
        <span>←</span> Back to flashcards
      </Link>
    </main>
  );
}
