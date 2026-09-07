import { describe, it, expect } from "vitest";
import { Encode_Decode } from ".";

const ENCODE_TESTS:{words:string[],result:string}[] = [
    {words:['hello','world'],result:'#5$hello#5$world'},
    {words:[""],result:""}
]

const DECODE_TESTS:{str:string,list:string[]}[]=[
    {str:'#5$hello#5$world',list:['hello','world']},
    {str:"#0$",list:[""]}
]

ENCODE_TESTS.map(({words,result})=>{
    describe('encode',()=>{
    it('Receives a list of strings, and convert it into a single string',()=>{
        const encodedString = new Encode_Decode
        expect(encodedString.encode(words)).toMatch(result)
    })
})
})

DECODE_TESTS.map(({str,list})=>{
    describe('decode',()=>{
        it('Receive an encoded string and produce a list of strings',()=>{
            const decodeString = new Encode_Decode
            expect(decodeString.decode(str)).toEqual(list)
        })
    })
})
