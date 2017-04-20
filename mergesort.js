function split(wholeArray) {
    if (wholeArray.length < 2) {
        return wholeArray
    }
    
    // split wholeArray into two halves
    var firstHalf = wholeArray.splice(0, Math.ceil(wholeArray.length/2))
    return [firstHalf, wholeArray];
}

function merge(arr1, arr2) {
    // merges two sorted arrays
    var i = 0, j = 0,
        results = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) { 
            results.push(arr1[i]); 
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    
    // push the rest of whichever array has larger numbers to results
    if (i == arr1.length) results = results.concat(arr2.slice(j));
    else results.concat(arr1.slice(i));
    
    return results;
}