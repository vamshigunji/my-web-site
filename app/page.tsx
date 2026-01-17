export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold font-outfit text-brand-cyan mb-4">
        Foundation Initialized
      </h1>
      <p className="font-work-sans text-xl opacity-80 max-w-lg text-center">
        Next.js 15 + Tailwind v4 + Framer Motion ready.
      </p>
      <div className="mt-8 p-6 glass-panel rounded-2xl">
        <p className="font-mono text-sm">Waiting for content...</p>
      </div>
    </main>
  );
}
