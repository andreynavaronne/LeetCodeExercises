/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var isEmpty = function(x){
        var retorno = true;
        if(Array.isArray(x)){
            if(x.length > 0){
                retorno = false;
            }
        }else{
            if(x && typeof x === "object"){
                retorno =  Object.keys(x).length == 0; 
            }
        }
        return retorno;
    }
    return isEmpty(obj);
};