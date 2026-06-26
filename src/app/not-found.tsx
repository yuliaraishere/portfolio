export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black px-6 text-center text-white">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="max-w-xl text-sm text-neutral-300">
        The page you are looking for does not exist.
      </p>
    </main>
  );
}
