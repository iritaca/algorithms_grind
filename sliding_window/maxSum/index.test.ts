import {it, describe, expect} from 'vitest'
import { largestWindowSum } from ".";

describe('largestWindowSum',()=>{
    it('return the largest sum within a K size window from an array',()=>{
        const nums = [2,1,5,1,3,2]
        const k = 3
        expect(largestWindowSum(nums,k)).toEqual(9)
    })
})