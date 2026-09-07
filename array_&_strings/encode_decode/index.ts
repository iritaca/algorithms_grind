class Encode_Decode {
    encode(strs:string[]):string{
        let encoded=''
        for(let i = 0; i<strs.length;i++){
            encoded+=`#${strs[i].length}$${strs[i]}`
        }
        return encoded
    }

    decode(str:string):string[]{
        let i =0
        const words = []
        while(i<str.length){
            const dollarIdx=str.indexOf('$',i)
            const lengthStr=str.slice(i+1, dollarIdx)
            const length = Number(lengthStr)

            const wordStart= dollarIdx + 1
            const wordLength=wordStart+length
            const word = str.slice(wordStart,wordLength)

            words.push(word)
            i=wordLength
        }
        return words
    }
}

export {Encode_Decode}