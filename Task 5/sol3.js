function titleCaseSentence(str) {
 return str
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
    }