function returnEvenValues(array){
    let evenNums = [];
    for (let i = 0; i < array.length; ) {
        if (array[i]%2 ===0){
            evenNums.push(array[i])
        }
   }
   console.log(evenNums)
}

let array = [1,2,4,5,7,9];
returnEvenValues(array);

