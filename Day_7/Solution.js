/**
 * @param {string} s
 * @return {number}
 */

var minLength = function(s) {
    let stack = []; 
    
    // for every B and D look for top on the stack if it quals to A and C, respectively. 
    
    for(let c of s) {
            let top = stack[stack.length - 1]; 
            if(c === "B" && top === "A") stack.pop(); 
            else if(c === "D" && top === "C") stack.pop(); 
            else stack.push(c); 
    }
    return stack.length; 
};