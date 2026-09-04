import {describe,expect,it} from 'vitest'
import { merge } from './index'

/**
 * Merge Sorted Array
 * link: https://leetcode.com/problems/merge-sorted-array
 * 
 * You are given two integer arrays nums1 and nums2, 
 * sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively. 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing 
 * order. 
 * The final sorted array should not be returned by the function, but 
 * instead be stored inside the array nums1. To accommodate this, nums1
 * has a length of m + n, where the first m elements denote the elements
 * that should be merged, and the last n elements are set to 0 and should
 * be ignored. nums2 has a length of n.
 * 
 */
const tests=[
    {nums1: [1,2,3,0,0,0], m : 3, nums2 : [2,5,6], n : 3,result:[1,2,2,3,5,6]},
    {nums1: [1], m : 1, nums2 : [], n : 0, result:[1]},
    {nums1: [0], m : 0, nums2 : [1], n : 1, result:[1]},
]

for(let i=0;i<tests.length;i++){
    describe('merge',()=>{
        it('Slice 2 arrays and merge them',()=>{
            const {nums1,m,nums2,n} = tests[i]
            merge(nums1,m,nums2,n)
            expect(nums1).toEqual(tests[i].result)
        })
    })
}


