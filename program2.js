const decodeTheRing = function (x, y) {
  // Initialize pointers 
  let xIndex = 0; // for  secret message
  let yIndex = 0; //  for  decoder key
  let starIndex = -1; // Pointer to track the last star position 
  let matchIndex = 0; //  to track the position in the secret message when a star is found

  while (xIndex < x.length) {
      // If the pattern character matches the message character, or if it's a '?', move both pointers
      if (yIndex < y.length && (y[yIndex] === x[xIndex] || y[yIndex] === '?')) {
          xIndex++;
          yIndex++;
      }
      // If  encounter a * mark its position 
      else if (yIndex < y.length && y[yIndex] === '*') {
          starIndex = yIndex; // Update star index
          matchIndex = xIndex; // Update match index
          yIndex++; // Move to the next character 
      }
      // If there's a mismatch  backtrack to the last star position
      else if (starIndex !== -1) {
          yIndex = starIndex + 1; // Move past  star
          xIndex = matchIndex + 1; // Try the next character 
          matchIndex = xIndex; // Update match index
      }
      // If no conditions match, return false
      else {
          return false;
      }
  }

  // Check for remaining characters 
  while (yIndex < y.length && y[yIndex] === '*') {
      yIndex++;
  }

  // If matched the entire patttern return true
  return yIndex === y.length;
};

module.exports = decodeTheRing;
