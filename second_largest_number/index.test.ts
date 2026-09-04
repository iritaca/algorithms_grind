import {expect,it, describe} from 'vitest'
import { secondLargestNumber } from "./index"

describe('secondLargestNumber',()=>{
    it('returns the second largest number',()=>{
        const nums=[12,35,1,10,34,1]
        expect(secondLargestNumber(nums)).toBe(34)
    })
})


describe('secondLargestNumber',()=>{
    it('returns the second largest number',()=>{
        const nums=[12,5,12]
        expect(secondLargestNumber(nums)).toBe(5)
    })
})


describe('secondLargestNumber',()=>{
    it('returns the legend "There is no second element"',()=>{
        const nums=[12,12,12]
        expect(secondLargestNumber(nums)).toMatch("There is no second largest")
    })
})