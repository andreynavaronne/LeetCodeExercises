/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var retorno = [];
    var encaixe = [];
    for(var i = 0; i < arr.length; i++){
        encaixe.push(arr[i]);
        if(encaixe.length == size){
            retorno.push(encaixe);
            encaixe = [];
        }else{
            if(arr.length-1 == i){
                retorno.push(encaixe);
            }
        }
    }
    return retorno;    
};