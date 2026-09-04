function groupByFirstLetter(words:string[]):{}{
    const groups:Record<string,string[]> = {}

    for(let i =0; i<words.length;i++){
        const letter = words[i][0]

        if(!groups[letter]){
            groups[letter]=[]
        }

        groups[letter].push(words[i])
    }
    return groups
}

export {groupByFirstLetter}