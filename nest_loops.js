/*
// Nested loop is simply a loop inside another loop
for (let row = 1; row <= 5; row++){
    for(let col = 1; col <= 5; col++){
	console.log(`row ${row}, col ${col}`);
    }
}
// if row 1, 2, 3, 4, 5 <= 5 add 1 so when we get to 5 we can't go past that

//if col 1, 2, 3, 4, 5 <= 5 add 

*/

/*
// Nested loop for multiplication
for (let x = 1; x <= 5; x++){
    for(let y = 1; y <= 5; y++){
	console.log(`${x} X ${y} = ${x * y}`);
    }
}
*/

/*
for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "* ";
  }
  console.log(stars);
}
*/
// Matrix involvement question

const matrix = [
    [10,20,30],
    [30,40,50],
    [50,60,70],
]

for(let row = 0; row<matrix.length; row++){
    for(let col=0; col<matrix[row].length; col++){
	console.log(`Row ${row}, col ${col}: ${matrix[row][col]}`);
    }
}
