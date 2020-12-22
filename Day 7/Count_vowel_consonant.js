function countVowelConsonant(str) {
  // write code here
 // var strArr = str.split("");

    let result = 0;
    let vowels = "aeiou"
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                result++;
                }
            }
        }
    var res=result;
    var l = str.length;
    var x = l - 2;
    var y = 2*x;
    var z = res + y;
    return z;

}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
