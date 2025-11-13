'use client';

type FlashcardProps = {
  russian: string;
  english: string;
  isFlipped: boolean;
  onFlip: () => void;
};

export default function Flashcard({ russian, english, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div
      className="relative w-full max-w-2xl h-64 cursor-pointer"
      onClick={onFlip}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front side - Russian */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-8"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-white">{russian}</p>
          </div>
        </div>

        {/* Back side - English */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center p-8"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-white">{english}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

