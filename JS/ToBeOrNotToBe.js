/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    return{
        toBe: function(x){
          if(x === val){
            return true;
          }else{
            throw new Error( "Not Equal");
          }
        },

        notToBe : function(x){
          if(x === val){
            throw new Error("Equal");
          }else{
            return true;
          }
        }
    } 
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */