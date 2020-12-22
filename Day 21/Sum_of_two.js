function sumOfTwo(nums1, nums2, value) {
    //  write code here.
    var i;
    var j;
    for (i=0;i<nums1.length;i++)
    {
        for (j=0;j<nums2.length;j++)
        {
            if (nums1[i]+nums2[j]==value)
            {
                return true;
            }
        }
    }
}



/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});
