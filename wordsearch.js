const wordSearch = (letters, word) => {
  //horizontal
  let tf = false;
  letters.forEach((item) => {
      if (item.join("").includes(word)) {
          tf = true;
      }
  });
  //col
  transpose(letters).forEach((item) => {
      if (item.join("").includes(word)) {
          tf = true;
      }
  });
  //reverse horizontal
  letters.forEach((item) => {
      if (item.reverse().join("").includes(word)) {
          tf = true;
      }
  });
  //reverse col
  transpose(letters).forEach((item) => {
      if (item.reverse().join("").includes(word)) {
          tf = true;
      }
  });
  // search diagonally
  const diagLeft = [];
  let diagRight = [];
  for (let rowIndex = 0; rowIndex < letters[0].length; rowIndex++) {
      for (let colIndex = 0; colIndex < letters.length; colIndex++) {
          if (!diagLeft[rowIndex + colIndex]) {
              diagLeft[rowIndex + colIndex] = [];
          }
          if (!diagRight[rowIndex + colIndex]) {
              diagRight[rowIndex + colIndex] = [];
          }
          diagLeft[rowIndex + colIndex].push(letters[colIndex][rowIndex]); //working
          diagRight[rowIndex + colIndex].push(letters[colIndex][rowIndex]);
          console.log(letters[colIndex][rowIndex]);
      }
  }
  diagRight = diagRight.reverse();
  console.log(diagRight);
  return tf;
};
const transpose = function (matrix) {
  let finalMatrix = [];
  if (matrix.length === 0) {
      return [];
  }
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (!finalMatrix[col]) {
              finalMatrix[col] = [];
          }
          finalMatrix[col].push(matrix[row][col]);
      }
  }
  return finalMatrix;
};
const result = wordSearch([
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['10', '11', '12']
], '159');
// console.log(['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'].reverse());
module.exports = wordSearch;