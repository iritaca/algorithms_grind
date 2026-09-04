import {describe,it,expect} from 'vitest'
import { groupByFirstLetter } from './index'

describe('groupByFirstLetter',()=>{
    it('create an array with groups of words with the key=first letter',()=>{
        const words = ["hello", "hi", "sun", "sky"]
        
        expect(groupByFirstLetter(words)).toEqual({"h":["hello","hi"],s:['sun','sky']})
    })
})