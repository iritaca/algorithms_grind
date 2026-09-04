/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const slicedNums1=nums1.slice(0,m)
    const slicedNums2 = nums2.slice(0,n)

    const combined = [...slicedNums1,...slicedNums2]
    const sortedRes = combined.sort((a,b)=>a-b)
    for(let i =0 ; i<sortedRes.length;i++){
        nums1[i]=sortedRes[i]
    }
};

export {merge}