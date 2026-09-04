import {it,expect, describe} from 'vitest'
import { isPalindrome } from './index'

describe('is_palindrome',()=>{
    it('confirm that a string can be read from left to right or right to left',()=>{
        const s="race a car"
        expect(isPalindrome(s)).toBe(false)
    })
})

describe('is_palindrome',()=>{
    it('confirm that a string can be read from left to right or right to left',()=>{
        const s="A man, a plan, a canal: Panama"
        expect(isPalindrome(s)).toBe(true)
    })
})