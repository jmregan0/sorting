var array1 = [1,2,4,3,2,6];

var array2 = [9,8,34,33,2,123,54,22,88,3,67,3,1,26,14,99,2,65];

var array3 = [9,8,34,33,2,123,54,22,88,3,67,3,1,26,14,99,2,65,71,43,80,31,53,44,61,125,13,209,399,211,26,599,30,31,478,20];

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
});

describe('Bubble Sort', function(){
  it('handles an single array', function(){
    expect(bubbleSort([1])).toEqual([1]);
  });
});

describe('Bubble Sort', function(){
  it('handles array1', function(){
    expect(bubbleSort(array1)).toEqual(array1.sort(function(a,b){
      return a - b;
    }));
  });
});

describe('Bubble Sort', function(){
  it('handles array2', function(){
    expect(bubbleSort(array2)).toEqual(array2.sort(function(a,b){
      return a - b;
    }));
  });
});

describe('Bubble Sort', function(){
  it('handles array3', function(){
    expect(bubbleSort(array3)).toEqual(array3.sort(function(a,b){
      return a - b;
    }));
  });
});


