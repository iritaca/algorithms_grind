function secondLargestNumber(nums:number[]):number|string{
    let largest=undefined
    let second=undefined
    for(let i = 0;i<nums.length;i++){
        if(largest===undefined){
             largest=nums[i]
        }else if(nums[i]>largest){
            second=largest
            largest=nums[i]
        }else if(nums[i]<largest){
            if(second===undefined || second<=nums[i]){
                second=nums[i]
            }
        }
    }
    if(second === undefined) return 'There is no second largest'
    return second
}
export {secondLargestNumber}