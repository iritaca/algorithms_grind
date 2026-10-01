/**
 * Longest Substring with at most K distinct characters
 * 
 * Given a string s and an integer k, return the length of the longest
 * substring of 's' that contains at most 'k' distinct characters.
 * 
 * A substring is a contiguous sequence of characters within the string
 * Characters may repeat inside the substing; only the number of 
 * *different* characters is limited
 * 
 * Examples
 * 
 * input s= 'eceba' ,k= 2
 * output : 3
 * Explanation: "ece" contains 2 distinct characters (e, c) and has length 3.
 * 
 * **Example 2** 
 * Input: s = "aa", k = 1
 * Output: 2
 * Explanation: "aa" contains 1 distinct character and has length 2.
 * 
 * **Example 3**
 * Input: s = "abacdcddeffe", k = 2
 * Output: 5
 * Explanation: "cdcdd" contains 2 distinct characters (c, d) and has length 5.
 * Other valid windows such as "aba" (3) and "effe" (4) are shorter.
 * 
 * ## Constraints
 * - 0 <= s.length <= 5 * 10^4
 * - 0 <= k <= 50
 * - If k = 0, no characters are allowed, so the answer is 0.
 * 
 * 
 * ## Complexity
 * - Time: O(n)
 * - Space: O(k)
 */

function longestSubstring(s:string,k:number):number{
    let left = 0, best =0
    const map = new Map<string,number>()
    for(let right =0;right<s.length;right++){
        if(!map.has(s[right])){
            map.set(s[right],1)
        }else{
            map.set(s[right],(map.get(s[right])??0) + 1)
        }

        while(map.size>k){
            const cur=(map.get(s[left])??0) - 1
            if(cur===0){
                map.delete(s[left])
            }else{
                map.set(s[left],cur)
                
            }
            left++
        }

        best = Math.max(best,right - left + 1)
    }
    return best
}

export {longestSubstring}