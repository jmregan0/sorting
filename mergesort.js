function split(wholeArray) {
    if (wholeArray.length < 2) {
        return [wholeArray, []]
    }
    
    // split
    var n = Math.ceil(wholeArray.length/2),
        firstHalf = wholeArray.slice(0, n),
        secondHalf = wholeArray.slice(n);

    return [firstHalf, secondHalf];
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
    else results = results.concat(arr1.slice(i));
    
    return results;
}

function mergeSort(array) {
    if (array.length <= 1) { return array; }
    else{
        var splitArr = split(array);
        return merge( mergeSort(splitArr[0]), mergeSort(splitArr[1]) );
    }
}

