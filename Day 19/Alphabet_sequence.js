function alphabetSubsequence(str) {
    //  write code here.
    var x=str;
    var i = 0;
    var res = true;
    for (i=0;i < x.length;i++)
    {
     if (x.charCodeAt(i) < x.charCodeAt(i+1) )
     {
        res = true;
     }
     else if (x.charCodeAt(i)==x.charCodeAt(i+1))
     {
         res = false;
         break;
     }
     else if (x.charCodeAt(i)>=x.charCodeAt(i+1))
     {
         res = false;
         break;
     }
    }
    return res;
}



/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});
