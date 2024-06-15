/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    var last = -1;
    if(this.length > 0){
        last = this[this.length-1];
    }
    return last;   
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */