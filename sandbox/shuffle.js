function shuffleArray(inputMessageArray) {
  const shuffledOutput = [];

  let cutIndex = 0;
  while (inputMessageArray.length > 0) {
    console.log(inputMessageArray.length);
    cutIndex = Math.floor(Math.random() * inputMessageArray.length);
    console.log({ cutIndex });
    // splice returns a list of the removed element, so need to index into the list
    // to access the number before pushing to the output array.
    const removed = inputMessageArray.splice(cutIndex, 1)[0];
    console.log({ removed });
    shuffledOutput.push(removed);
  }
  return shuffledOutput;
}

let testOut = shuffleArray([1, 2, 3, 4, 5]);

console.log({ testOut });
