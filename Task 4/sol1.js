function isAnagram(s1, s2) {
  const clean1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  const clean2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (clean1.length !== clean2.length) {
    return false;
  }

  const count = {};

  for (const char of clean1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of clean2) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); 
// true

console.log(isAnagram("Hello", "world")); 
// false

console.log(isAnagram("A decimal point", "I'm a dot in place")); 
// true