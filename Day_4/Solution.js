/**
 * @param {number[]} skill
 * @return {number}
 */
// neetcode solution Hashmap to store the count of each element. 

var dividePlayers = function(skill) {
    let total = skill.reduce((a, e) => a + e, 0); 

    if( (2 * total)  % skill.length) // if this is non-zero
        return -1; 
    
    let count = {}; 
    
    for(let s of skill) {
        count[s] = (count[s] || 0) + 1;
    }

    let target = (2 * total) / skill.length;
    let chemistry = 0;   
    for(let s of skill) {

        if(!count[s]) continue; // we dont need find its pair, its already been paired
        count[s] -= 1; 
        
        let diff = target - s; 
        if(!count[diff]) return -1; // we cant find its pair
        
        chemistry += s * diff; 
        count[diff] -= 1; 
    }

    return chemistry; 
};