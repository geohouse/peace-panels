function shuffleArray(inputMessageArray) {
  const shuffledOutput = [];
	const inputArray = [...inputMessageArray];
  let cutIndex = 0;
  console.log("starting while")
  while (inputArray.length > 0) {
    console.log(inputArray.length);
    cutIndex = Math.floor(Math.random() * inputArray.length);
    console.log({ cutIndex });
    // splice returns a list of the removed element, so need to index into the list
    // to access the number before pushing to the output array.
    const removed = inputArray.splice(cutIndex, 1)[0];
    console.log({ removed });
    shuffledOutput.push(removed);
  }
  return shuffledOutput;
}

let testOut = shuffleArray([1, 2, 3, 4, 5]);

console.log({ testOut });

function shuffleTest(){

	let testArray = [1,2,3];
	
	let outputTabulate={};
	
	for(let index = 0; index < 10000; index ++){
		let shuffledOutput = shuffleArray(testArray);
		console.log(shuffledOutput);
		// CSV
		let shuffledOutputString = shuffledOutput.join();
		if(outputTabulate.hasOwnProperty(shuffledOutputString)){
			outputTabulate[shuffledOutputString] += 1;
		} else{
			outputTabulate[shuffledOutputString] = 1;
		}
	}
	
	for(key in outputTabulate){
	console.log(`${outputTabulate[key]} times for ${key}`)
	}
	
}

shuffleTest();

// let testArray = [1,2,3];
// let shuffledOutput2 = shuffleArray(testArray);
// console.log({testArray})
// let shuffledOutput3 = shuffleArray(testArray);
// console.log(shuffledOutput2)
// console.log(shuffledOutput3)