'use client';

type FlashcardProps = {
  russian: string;
  english: string;
  isFlipped: boolean;
  onFlip: () => void;
};

export default function Flashcard({ russian, english, isFlipped, onFlip }: FlashcardProps) {
  return (
    <button
      type="button"
      className="group relative w-full max-w-2xl h-72 cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
      onClick={onFlip}
      style={{ perspective: '1200px' }}
      aria-label={isFlipped ? `Showing translation: ${english}. Tap to flip.` : `Showing Russian word: ${russian}. Tap to reveal translation.`}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front side — Russian */}
        <Face
          side="front"
          label="Russian"
          word={russian}
          accent="from-indigo-500/90 via-indigo-600/90 to-violet-700/90"
          glow="rgba(99,102,241,0.35)"
        />

        {/* Back side — English */}
        <Face
          side="back"
          label="English"
          word={english}
          accent="from-emerald-500/90 via-teal-600/90 to-emerald-700/90"
          glow="rgba(16,185,129,0.32)"
        />
      </div>
    </button>
  );
}

function Face({
  side,
  label,
  word,
  accent,
  glow,
}: {
  side: 'front' | 'back';
  label: string;
  word: string;
  accent: string;
  glow: string;
}) {
  return (
    <div
      className={`absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-linear-to-br ${accent} flex flex-col items-center justify-center p-8 overflow-hidden`}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: side === 'back' ? 'rotateY(180deg)' : undefined,
        boxShadow: `0 30px 60px -20px ${glow}, inset 0 1px 0 0 rgba(255,255,255,0.15)`,
      }}
    >
      {/* soft sheen */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-white/5" />

      <span className="absolute top-5 left-6 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>

      <p className="relative text-center text-5xl font-bold leading-tight text-white drop-shadow-sm">
        {word}
      </p>

      <span className="absolute bottom-5 text-xs font-medium tracking-wide text-white/50 transition-opacity group-hover:opacity-100 opacity-70">
        Tap or press Space to flip
      </span>
    </div>
  );
}
