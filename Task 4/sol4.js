function countWordFrequencies(sentence) {
  const words = sentence
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(word => word.length > 0);

  const frequency = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
}

console.log(countWordFrequencies("Hello world, hello!"));
// { hello: 2, world: 1 }

console.log(
  countWordFrequencies("The quick brown fox jumps over the lazy dog.")
);
// { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }