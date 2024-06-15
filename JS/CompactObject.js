/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    var compacted = {};
    if (obj === null){
        compacted = null;
    } else if (Array.isArray(obj)){ 
        compacted = obj.filter(Boolean).map(compactObject);
    } else if (typeof obj !== "object"){
        compacted = obj;
    } else{
        for (const key in obj) {
           let value = compactObject(obj[key]);
           if (Boolean(value)){
             compacted[key] = value;
           }
        }
    }

    return compacted;
};