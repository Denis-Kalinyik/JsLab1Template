function countWords(string) {
    if (string.trim() === '') { // check if the string is empty
    return 0;
    }
    return string.trim().split(/\s+/).length;
    }
    console.log(countWords('Running sanity checks for countWords') === 5);
    console.log(countWords('') === 0);
    console.log(countWords('one two') === 2);
    console.log(countWords('1 2 3') === 3);
    console.log(countWords('spaces between words') === 3);
    console.log(countWords(' special characters !@#$%^&*()_+') === 3);
    // Additional tests
    console.log(countWords(' singleword ') === 1);
    console.log(countWords('multiple spaces between words') === 4);
    console.log(countWords(' 12345 ') === 1);
    
