function titleCaseSentence(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCaseSentence("hello world"));
// "Hello World"

console.log(titleCaseSentence("a short sentence"));
// "A Short Sentence"

console.log(titleCaseSentence("  hELLo    woRLD  "));
// "Hello World"

console.log(titleCaseSentence(""));
// ""

console.log(titleCaseSentence("   "));
// ""