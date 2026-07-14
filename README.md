# Learn Russian

A modern flashcard application built with Next.js for practicing Russian vocabulary. Study 646 Russian-English word pairs with an interactive flashcard interface.

**Live site:** [learnrussian.gevorkmanukyan.com](https://learnrussian.gevorkmanukyan.com)

## Features

- **Interactive Flashcards**: Click to flip between Russian and English translations
- **Smooth Animations**: 3D flip animation for an engaging learning experience
- **Navigation**: Easy Previous/Next navigation through all words
- **Shuffle Mode**: Randomize word order for varied practice sessions
- **Session Tracking**: See your progress with current card number and total count
- **Clean UI**: Modern, responsive design built with Tailwind CSS

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.4.1 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learn-russian
```

2. Install dependencies:
```bash
pnpm install
```

3. The word data is already extracted in `src/data/words.json`. If you need to re-extract from the text file, run:
```bash
npx tsx scripts/extract-words.ts
```

4. Start the development server:
```bash
pnpm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **View Russian Word**: The flashcard shows the Russian word by default
2. **Flip Card**: Click anywhere on the flashcard to reveal the English translation
3. **Navigate**: Use the "Previous" and "Next" buttons to move through words
4. **Shuffle**: Click the "Shuffle" button to randomize the word order
5. **Track Progress**: View your current position in the session stats (e.g., "5 / 646")

## Project Structure

```
learn-russian/
├── public/
│   ├── 1000 Russian Words.pdf      # Original PDF source
│   └── russian_english_pairs.txt    # Text file with word pairs
├── scripts/
│   └── extract-words.ts            # Script to extract words from text file
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main practice interface
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   └── Flashcard.tsx            # Flashcard component with flip animation
│   └── data/
│       └── words.json               # Extracted word pairs (646 words)
└── package.json
```

## Extracting Words

If you need to regenerate the word data from the text file:

1. Ensure `public/russian_english_pairs.txt` exists with the format:
   ```
   русский — english
   ```

2. Run the extraction script:
```bash
npx tsx scripts/extract-words.ts
```

This will parse the text file and generate `src/data/words.json` with all word pairs.

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## Data Format

Words are stored in `src/data/words.json` as an array of objects:

```json
[
  {
    "russian": "при́нтер",
    "english": "printer"
  },
  ...
]
```

## License

Private project for personal learning.
