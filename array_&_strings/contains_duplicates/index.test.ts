import { describe,it, expect } from "vitest";
import { containsDuplicate } from ".";

describe('containsDuplicate',()=>{
    it('Shows false when no duplicates',()=>{
        const list =[1,2,3,4]
        expect(containsDuplicate(list)).toBe(false)
    })
})

describe('containsDuplicate',()=>{
    it('Shows true when has a duplicate',()=>{
        const list =[1,2,3,4,3]
        expect(containsDuplicate(list)).toBe(true)
    })
})