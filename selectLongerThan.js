function selectLongerThan(array, threshold) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > threshold) {
        result.push(array[i]);
      }
    }
    return result;
  }
 
 
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1));
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0));
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1));
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2));
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3));
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4));
 
 
  console.log(selectLongerThan([], 0)); // []
  console.log(selectLongerThan([''], 0)); // ['']
  console.log(selectLongerThan([''], 1)); // []
  console.log(selectLongerThan(['a', 'ab', 'abc', 'abcd'], 2)); // ['abc', 'abcd']
  console.log(selectLongerThan(['a', 'ab', 'abc', 'abcd'], 3)); // ['abcd']
  console.log(selectLongerThan(['aaa', 'bb', 'c', 'ddd', 'eeeee'], 2)); // ['aaa', 'ddd', 'eeeee']
