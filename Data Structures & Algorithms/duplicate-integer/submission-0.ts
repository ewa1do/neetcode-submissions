class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (!hash[nums[i]]) {
                hash[nums[i]] = true;
            }
        }


        return Object.keys(hash).length !== nums.length;
    }
}
