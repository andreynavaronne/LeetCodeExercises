/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        var result = x;
        for(let i=functions.length-1; i>-1; i--){
            fn = function(x){
                return functions[i](x);
            }
            result = fn(result);
        }
        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */