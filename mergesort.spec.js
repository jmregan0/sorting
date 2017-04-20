var arr1 = [1,2,4,3,2,6];

var arr2 = [9,8,34,33,2,123,54,22, 88, 67,3,1,26,14,99,2,65];

var arr3 = [9,8,34,33,2,123,54,22,88,3,67,3,1,26,14,99,2,65,71,43,80,31,53,44,61,125,13,209,399,211,26,599,30,31,478,20];


describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split(arr1) ).toEqual([[1,2,4], [3,2,6]]);
  });
  
  it('is able to split an array into two halves if array.length is odd', function() {
      expect( split(arr2) ).toEqual([[9,8,34,33,2,123,54,22,88], [67,3,1,26,14,99,2,65]]);
  });
  
  it('is able to handle one element in array', function() {
    expect( split([2]) ).toEqual([2]);
  });
  
  it('is able to handle empty array', function() {
    expect( split([]) ).toEqual([]);
  });
  
});

Expected [ 1, 2, 2, 3, 8, 9, 14, 22, 26, 33, 34, 54, 65, 67, 88, 99 ] to equal [ 1, 2, 3, 14, 26, 65, 67, 99 ].

describe('Merge', function(){
    beforeEach(function() {
        var arr1 = [1,2,4,3,2,6];

        var arr2 = [9,8,34,33,2,123,54,22, 88, 67,3,1,26,14,99,2,65];

        var arr3 = [9,8,34,33,2,123,54,22,88,3,67,3,1,26,14,99,2,65,71,43,80,31,53,44,61,125,13,209,399,211,26,599,30,31,478,20];
    });
    
  it('is able to merge two sorted arrays into one sorted array', function(){
      expect( merge([2, 8, 9, 22, 33, 34, 54, 88, 123], [1, 2, 3, 14, 26, 65, 67, 99]) ).toEqual(arr2.sort(function(a,b) {return a-b}));
  });
});

describe('Merge Sort', function(){
  it('is able to sort arrays', function(){
      expect(mergeSort(arr1)).toEqual(arr1.sort(function(a,b){
        return a - b;
      }));
      expect(mergeSort(arr2)).toEqual(arr2.sort(function(a,b){
        return a - b;
      }));
      expect(mergeSort(arr3)).toEqual(arr3.sort(function(a,b){
        return a - b;
      }));
  });
});