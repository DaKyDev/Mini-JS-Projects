const quotes = [
  'We ball. Horribly. But we ball.',
  'Every day I wake up and choose chaos and self-improvement.',
  'You can’t kill what’s already dead inside — but you can slightly improve it.',
  'Cry, code, conquer, repeat.',
  'God gives his silliest struggles to his most exhausted clowns.',
  'Every day’s a new opportunity to make the same mistakes with flair.',
  'Everything’s fine. Just in a deeply concerning way.',
  'I’m not self-destructive, I’m just committed to the bit.',
  'My motivation died young, but its ghost still lingers.',
];

const usedIndexes = new Set();
const quoteElement = document.getElementById('quote');

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
