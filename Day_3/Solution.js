/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let hash = {}; 
    let sorted = [...arr]; 
    sorted.sort((a,b) => a - b);
    let res = new Array(arr.length).fill(1);  
    
    let rank = 1; 
    for(let n of sorted) {
        if(!hash[n]) {
            hash[n] = rank;
            rank++; 
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        res[i] = hash[arr[i]]; 
    }

    return res; 
};