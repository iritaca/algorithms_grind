import {expect, it, describe} from 'vitest'
import { fizzBuzz } from '.'

describe('fizzbuzz',()=>{
    const result = fizzBuzz(30)

    it('returns FizzBuzz for every multiple of 15',()=>{
        for(let i =15;i<=30;i+=15){
            expect(result[i - 1]).toBe('FizzBuzz')
        }
    })

    it('returns Fizz for multiples of 3 that are not multiples of 5',()=>{
        for(let i =3;i<=30;i+=3){
            if(i % 5 !==0){
                expect(result[i-1]).toBe('Fizz')
            }
        }
    })

    it('returns Buzz for multiples of 5 that are not multiples of 3',()=>{
        for(let i =5;i<=30;i+=5){
            if(i % 3 !==0){
                expect(result[i-1]).toBe('Buzz')
            }
        }
    })
    it('returns the number itself when not divisible by 3 or 5',()=>{
        expect(result[0]).toBe('1')
        expect(result[1]).toBe('2')
        expect(result[6]).toBe('7')
    })
})