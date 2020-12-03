// Created by Jacqueline Smith, Kevin Chu, and Aqil Ebrahim 

const wordSearch = (letters, word) => { 
    const wordArray = []
    const horizontalJoin = letters.map(ls => ls.join(''))
    wordArray.push(horizontalJoin);
    const verticalJoin = function(letters) {
      
        for (row = 0; row < letters[0].length; row++) {
          let string = '';
          for (column = 0; column < letters.length; column++) {
            string += letters[column][row];
          }
          wordArray.push(string);
        }
    }
    wordArray.push(verticalJoin(letters));
    
    console.log(wordArray)
    
    for (l of wordArray) {
    
        if (l.includes(word)) {
             return true
            } else {
             return false;
    };
    
    }
}    

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ]));





module.exports = wordSearch;