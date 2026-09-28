function largestWindowSum(nums:number[],k:number):number|string{
    if(k>nums.length) return 'The list must be bigger than k'
    //compute the initial sum
    let sum=0
    let maxsum = 0
    for(let i=0;i<k;i++){
        sum+=nums[i]
    } 

    maxsum = sum
    for(let i=k;i<nums.length;i++){
        sum = sum -nums[i -k]+nums[i]
        if(sum>maxsum){
            maxsum=sum
        }
    }
    return maxsum
}

export {largestWindowSum}