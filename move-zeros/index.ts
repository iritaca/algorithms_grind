function moveZeroes(nums:number[]):void{
    let insertPos = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            const temp = nums[insertPos]
            nums[insertPos]= nums[i]
            nums[i]= temp
            insertPos++
        }
    }

}

export {moveZeroes}