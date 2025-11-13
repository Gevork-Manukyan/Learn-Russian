import * as fs from 'fs';
import * as path from 'path';

type WordPair = {
  russian: string;
  english: string;
};

function parseWordsFile(filePath: string): WordPair[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const wordPairs: WordPair[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Split on em dash separator
    const parts = trimmed.split(' — ');
    if (parts.length !== 2) continue;

    let russian = parts[0].trim();
    let english = parts[1].trim();

    // Remove trailing numbers (like "38", "39", etc.)
    english = english.replace(/\s+\d+$/, '');

    // Clean up any extra whitespace
    russian = russian.replace(/\s+/g, ' ');
    english = english.replace(/\s+/g, ' ');

    if (russian && english) {
      wordPairs.push({ russian, english });
    }
  }

  return wordPairs;
}

// Main execution
const inputPath = path.join(process.cwd(), 'public', 'russian_english_pairs.txt');
const outputPath = path.join(process.cwd(), 'src', 'data', 'words.json');

const wordPairs = parseWordsFile(inputPath);

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(wordPairs, null, 2), 'utf-8');

console.log(`Extracted ${wordPairs.length} word pairs`);
console.log(`Saved to ${outputPath}`);

