import { HeroSequence } from "@/components/HeroSequence";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroSequence />

      {/* Spacer for future content */}
      <div className="h-screen w-full flex items-center justify-center text-zinc-800">
        <p>Portfolio Content Below</p>
      </div>
    </main>
  );
}
