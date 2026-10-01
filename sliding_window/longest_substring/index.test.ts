import { longestSubstring } from ".";
import{expect,it,describe} from 'vitest'

const tests=[
    {input:'eceba',limit:2,output:3},
    {input:'aa',limit:1,output:2},
    {input:'abacdcddeffe',limit:2,output:5},
]
tests.map(t=>{
    describe('longestSubstringWithAtMostK',()=>{
        it(`return the length of the longest substring of s that contains at most k disting characters`,()=>{
            expect(longestSubstring(t.input,t.limit)).toBe(t.output)
        })
    })
})