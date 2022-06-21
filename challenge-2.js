function filterArray(arr) {
    return arr.filter((elem)=> {return typeof elem==='number'})
     
}

module.exports = filterArray
console.log(filterArray([7,3,20,4,2, "you", "5"]))