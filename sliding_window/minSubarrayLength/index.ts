/**
 * Given an array of positive numbers and a target sum find 
 * the length of the shortest contiguous subarray whose sum
 * is at least the target.
 * 
 * if no such subarray existes, return 0
 * 
 */

function minSubarrayLength(nums:number[],target:number):number{
    let left = 0,minLength=Infinity, windowSum=0
    for( let right=0;right<nums.length;right++){
        windowSum+=nums[right]
        while(windowSum>=target){
            const currLength = right - left + 1
            if(currLength<minLength) {
                minLength=currLength
            }

            windowSum-=nums[left]
            left++
        }
    }
    return minLength==Infinity? 0: minLength
}

export {minSubarrayLength}