'use client';

import { useCallback, useEffect, useState } from 'react';
import Flashcard from '@/components/Flashcard';
import wordsData from '@/data/words.json';

type WordPair = {
  russian: string;
  english: string;
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<WordPair[]>([]);

  const words = wordsData as WordPair[];
  const displayWords = shuffled ? shuffledWords : words;
  const currentWord = displayWords[currentIndex];
  const total = displayWords.length;
  const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  const handlePrevious = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : i));
    setIsFlipped(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => (i < total - 1 ? i + 1 : i));
    setIsFlipped(false);
  }, [total]);

  const handleFlip = useCallback(() => {
    setIsFlipped((f) => !f);
  }, []);

  const handleShuffle = () => {
    if (!shuffled) {
      const shuffledCopy = [...words];
      for (let i = shuffledCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCopy[i], shuffledCopy[j]] = [shuffledCopy[j], shuffledCopy[i]];
      }
      setShuffledWords(shuffledCopy);
    }
    setShuffled(!shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlePrevious, handleNext, handleFlip]);

  const atStart = currentIndex === 0;
  const atEnd = currentIndex === total - 1;

  return (
    <main className="min-h-screen px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <header className="mb-10 text-center animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-indigo-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Vocabulary Trainer
          </span>
          <h1 className="mt-4 bg-linear-to-br from-white via-white to-indigo-200/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Learn Russian
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Flip through {words.length} words · use ← → to navigate, Space to flip
          </p>
        </header>

        {/* Progress + meta */}
        <div className="mb-6 animate-rise" style={{ animationDelay: '60ms' }}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-gray-300">
              Card <span className="text-white">{currentIndex + 1}</span>
              <span className="text-gray-400"> / {total}</span>
            </span>
            <button
              onClick={handleShuffle}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                shuffled
                  ? 'bg-indigo-500/90 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500'
                  : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <ShuffleIcon />
              {shuffled ? 'Shuffled' : 'Shuffle'}
            </button>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-linear-to-r from-indigo-400 to-violet-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div
          className="mb-8 flex justify-center animate-rise"
          style={{ animationDelay: '120ms' }}
        >
          {currentWord && (
            <Flashcard
              russian={currentWord.russian}
              english={currentWord.english}
              isFlipped={isFlipped}
              onFlip={handleFlip}
            />
          )}
        </div>

        {/* Navigation */}
        <div
          className="flex items-center justify-between gap-4 animate-rise"
          style={{ animationDelay: '180ms' }}
        >
          <NavButton onClick={handlePrevious} disabled={atStart} direction="prev">
            Previous
          </NavButton>
          <NavButton onClick={handleNext} disabled={atEnd} direction="next">
            Next
          </NavButton>
        </div>
      </div>
    </main>
  );
}

function NavButton({
  onClick,
  disabled,
  direction,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group flex flex-1 items-center justify-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${
        disabled
          ? 'cursor-not-allowed border-white/5 bg-white/2 text-gray-600'
          : 'border-white/10 bg-white/5 text-gray-100 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      {direction === 'prev' && (
        <span className="transition-transform group-hover:-translate-x-0.5">←</span>
      )}
      {children}
      {direction === 'next' && (
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      )}
    </button>
  );
}

function ShuffleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}
