import {describe,it,expect} from 'vitest'
import { moveZeroes } from './index'

describe("moveZeroes",()=>{
    it("moves zeroes to the end, keeping relative order",()=>{
        const nums =[0,1,0,3,12]
        moveZeroes(nums)
        expect(nums).toEqual([1,3,12,0,0])
    })
})