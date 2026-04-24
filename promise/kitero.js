/**
 * 
 * @param {number} num
 * @returns {Promise<number>} 
 */
const buyapple1 = (num) =>{
    if(num < 5){
        return Promise.resolve(num)
    }else{
        return Promise.reject(num)
    }
}

console.log(`Indul a program`);
const res1 = buyapple1(3);
console.log(res1);
res1.then((value) => {
    console.log(`Vásárolt alma: ${value}`)
})
console.log("Vége a programnak")

/**
 * 
 * @param {number} num 
 * @returns {Promise<number>}
 */
const buyapple2 = (num) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 5){
                resolve(num)
            }else{
                reject(num)
            }
        }, 3000)
    })
}

console.log('buyapple2 progi indul')
const res2 = buyapple2(2);
console.log(res2);
res2.then((value) => {
    console.log(`Vásárolt alma: ${value}`)
})
console.log("vége")

const res3 = buyapple2(5)
res3.then((value) => {
    console.log(`vásárolt alma: ${value}`)
}).catch((calue) => {
    console.log(`nincs alma: ${calue}`)
}).finally(() =>{
    console.log("Vége a vásárlásnak")
})