const removeFromArray = function(arr, del) {
    //let index = arr.indexOf(del);
    arr.splice(del, 1)
    console.log(arr);
    return arr;
    };
    
    // Do not edit below this line
    module.exports = removeFromArray;
    