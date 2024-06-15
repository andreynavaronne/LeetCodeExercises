/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const newP = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1)
        },millis)
    });
    return newP;
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */