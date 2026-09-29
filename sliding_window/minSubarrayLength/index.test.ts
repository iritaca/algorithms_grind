import { minSubarrayLength } from ".";
import { describe, it, expect } from "vitest";

const cases = [{
    case:'return 1 when windowSum is bigger than the target',
    nums:[2,3,1,5,6,8,1],
    target:7,
    result:1
},
{
    case:'return 2, as the min length',
    nums:[2,3,1,2,4,3],
    target:7,
    result:2
},
{
    case:'return 0, because the sum never reaches the target',
    nums:[1,1,1,1],
    target:10,
    result:0
}
]

cases.map(c=>{
describe('minSubarrayLength',()=>{
    it(c.case,()=>{
        expect(minSubarrayLength(c.nums,c.target)).toBe(c.result)
    })
})
})
