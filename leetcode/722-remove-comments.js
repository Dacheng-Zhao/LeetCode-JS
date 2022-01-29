/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let in_block = false;
    let res = [];
    let temp = [];
    
    for (let i = 0; i < source.length; i++) {
        let j = 0;
        if (!in_block) {
            temp = [];
        }
        while (j < source[i].length) {
            if (source[i].slice(j, j+2) === '/*' && !in_block) {
                in_block = true;
                j += 1;
            } else if (source[i].slice(j, j+2) === '*/' && in_block) {
                in_block = false;
                j += 1;
            } else if (source[i].slice(j, j+2) === '//' && !in_block) {
                break
            } else if (!in_block) {
                temp.push(source[i][j]);
            }
            j += 1;
        }

        if (temp.length && !in_block) {
            res.push(temp.join(''));
        }
    }
    return res
};
