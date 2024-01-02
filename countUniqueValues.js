export function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    const uniqueArray = [...new Set(arr)];
    let one = uniqueArray[0]
    let two = uniqueArray[1]
    
    while (one < two){
        // console.log("🚀 ~ file: countUniqueValues.js:8 ~ countUniqueValues ~ two:", two)
        // console.log("🚀 ~ file: countUniqueValues.js:8 ~ countUniqueValues ~ one:", one)
        if  (one == two){
            // console.log("🚀 ~ file: countUniqueValues.js:9 ~ countUniqueValues ~ two:", two)
            // console.log("🚀 ~ file: countUniqueValues.js:9 ~ countUniqueValues ~ one:", one)
            // console.log("🚀 ~ file: countUniqueValues.js:9 ~ countUniqueValues ~ one == two:", one == two)
            two++;
        } else if (one < two){
            // console.log("🚀 ~ file: countUniqueValues.js:16 ~ countUniqueValues ~ one < two:", one < two)
            // console.log("🚀 ~ file: countUniqueValues.js:16 ~ countUniqueValues ~ one:", one)
            // console.log("🚀 ~ file: countUniqueValues.js:16 ~ countUniqueValues ~ two:", two)
            // console.log("🚀 ~ file: countUniqueValues.js:20 ~ countUniqueValues ~ uniqueArray:", uniqueArray)
          one++;
        } else {
            // console.log("🚀 ~ file: countUniqueValues.js:23 ~ countUniqueValues ~ one > two:", one > two)
            // console.log("🚀 ~ file: countUniqueValues.js:25 ~ countUniqueValues ~ one:", one)
            // console.log("🚀 ~ file: countUniqueValues.js:25 ~ countUniqueValues ~ two:", two)
            // console.log("🚀 ~ file: countUniqueValues.js:28 ~ countUniqueValues ~ uniqueArray:", uniqueArray)
            return
        }
    }
    // console.log(one)
    // console.log(two)
    // console.log(uniqueArray.length);
    
    return uniqueArray.length;
}

export function countUniqueValuesRefactor(arr){
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++){
        // if current index is not equal to the next index
        if (arr[i] !== arr[j]){
            // move the current index up one and replace the value with the next index value
            //  i
            // [1, 1, 2, 2, 3]
            //        j
            i++;
            // then set what arr[i] equal to arr[j] ?
            //     i
            // [1, 2, 2, 2, 3]
            //        j
            arr[i] = arr[j];
        }
        // if the current index is equal to the next index 
        // we don't do anything and the loop continues

        // console.log("🚀 ~ file: countUniqueValues.js:48 ~ countUniqueValuesRefactor ~ i;:", i)
        // console.log("🚀 ~ file: countUniqueValues.js:48 ~ countUniqueValuesRefactor ~ j;:", j)
    }

    return i + 1;
}

// more intuitive?

function countUniqueValuesAgain(sortedArray) {
    if (sortedArray.length === 0) return 0;
  
    let uniqueCount = 0;
    for (let i = 1; i < sortedArray.length; i++) {
      if (sortedArray[i] !== sortedArray[i - 1]) {
        uniqueCount++;
      }
    }
    return uniqueCount;
  }