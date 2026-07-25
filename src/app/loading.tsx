export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070F]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

        <h2 className="text-xl font-semibold text-white">
          Loading...
        </h2>

        <p className="text-sm text-slate-400">
          Please wait while we prepare your experience.
        </p>
      </div>
    </main>
  );
}