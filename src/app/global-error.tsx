"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
          <div>
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-300">
              {error.message || "The app could not be rendered."}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
