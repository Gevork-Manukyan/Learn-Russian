'use client';

import { useState } from 'react';
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

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < displayWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    if (!shuffled) {
      // Shuffle the array when enabling shuffle
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn Russian</h1>
          <p className="text-gray-600">Practice Russian vocabulary with flashcards</p>
        </div>

        {/* Session Stats */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Card</p>
              <p className="text-2xl font-bold text-gray-900">
                {currentIndex + 1} / {displayWords.length}
              </p>
            </div>
            <button
              onClick={handleShuffle}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                shuffled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {shuffled ? 'Shuffled' : 'Shuffle'}
            </button>
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-6 flex justify-center">
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === displayWords.length - 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentIndex === displayWords.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
