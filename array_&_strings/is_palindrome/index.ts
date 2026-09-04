function wordsCleanup(word:string):string{
    return word.toLowerCase().replace(/[^a-z0-9]/g,"")
}

function isPalindrome(s: string): boolean {
    if(s===' ') return true
    const c= wordsCleanup(s)
    for(let i = 0; i<Math.floor(c.length/2);i++){
        if(c[i]!==c[c.length - (i+1)]) return false
    }
return true
};

export {isPalindrome}