/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(s1, s2) {
    s1 = s1.split(" "); 
    s2 = s2.split(" "); 
    // s1always to be smaller for simplicity
    if(s1.length > s2.length) {
        [s1, s2] = [s2, s1]; 
    }

    let l1 = 0, l2 = 0;
    // looking for prefix
    while(l1 < s1.length && l2 < s2.length && s1[l1] === s2[l2]){
        l1 += 1; 
        l2 += 1; 
    }

    // looking for suffix 
    let r1 = s1.length -1, r2 = s2.length - 1; 
    while(r1 >= 0 && r2 >= 0 && s1[r1] === s2[r2]) {
        r1 -= 1; 
        r2 -= 1;
    }

    return l1 > r1 // when left and right pointers crosses each other return true
};