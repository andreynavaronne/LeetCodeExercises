/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var result = init;
    var val = 0;
    for(let i = 0; i<nums.length; i++){
        if(i == 0){
            val = fn(init, nums[0]);
        }else{
            val = fn(val, nums[i]);
        }
        result = val;
    }
    return result;
    
};