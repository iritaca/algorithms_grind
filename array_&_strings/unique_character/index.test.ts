import {describe, it, expect} from 'vitest'
import { firstUniqChar } from '.'

describe('firstUniqChar',()=>{
    it('return 0 for l being the 1st unique letter',()=>{
        expect(firstUniqChar('leetcode')).toBe(0)
    })
    it('return 2 for v being the 1st unique letter',()=>{
        expect(firstUniqChar('loveleetcode')).toBe(2)
    })
    it('return -1 when not unique characters',()=>{
        expect(firstUniqChar('aabb')).toBe(-1)
    })
})