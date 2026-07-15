"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to the console / any error-tracking integration.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-rose-300">
        Something went wrong
      </span>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Unexpected error
      </h1>
      <p className="mt-3 max-w-md text-sm text-gray-300">
        An error occurred while loading the flashcards. You can try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-100 transition-all hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
      >
        Try again
      </button>
    </main>
  );
}
