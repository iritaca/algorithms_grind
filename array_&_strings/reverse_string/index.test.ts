import { reverseString } from ".";
import {expect, it, describe} from 'vitest'

const tests=[
    {input: ["h","e","l","l","o"],
output: ["o","l","l","e","h"]},
{input: ["H","a","n","n","a","h"],
output: ["h","a","n","n","a","H"]}
]

tests.map(t=>{
describe('reverseString',()=>{
    it('return an array of reversed strings',()=>{
        expect(reverseString(t.input)).toEqual(t.output)
    })
})
})
