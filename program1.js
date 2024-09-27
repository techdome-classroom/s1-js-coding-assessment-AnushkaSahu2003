const getTotalIslands = function (grid) {
  // Function to count the number of distinct islands 
  if (!grid || grid.length === 0) return 0; // Return 0 if empty

  const rows = grid.length; // Number of rows 
  const cols = grid[0].length; // Number of columns 
  let islandsCount = 0; // Initialize count to 0

  //function for Depth First Search 
  const DFS = (r, c) => {
      // Check for out-of-bounds or water ('W')
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return; // Exit the function if out of bounds or at water
      }

      // Mark the land ('L') as visited by changing it to water ('W')
      grid[r][c] = 'W'; // This prevents revisiting the same land

      // Explore all four possible directions: up, down, left, right
      DFS(r - 1, c); // Up
      DFS(r + 1, c); // Down
      DFS(r, c - 1); // Left
      DFS(r, c + 1); // Right
  };

  // Iterate through each cell in the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          // If we find a landmass ('L'), it is a new island
          if (grid[r][c] === 'L') {
              islandsCount++; // Increment the  count
              DFS(r, c); // Call DFS to mark 
          }
      }
  }

  return islandsCount; // Return the total number of islands 
};

module.exports = getTotalIslands; 
