const removeFromArray = function(arr,...arr1) {
    
    let arr1len = arr1.length;
    function filt(num){
        for(let i=0;i<arr1len;i++){
            if(num===arr1[i]){
                return false;
            }
        }
        return true;
    }
    let finalarr = arr.filter(filt);
    return finalarr;
}

// Do not edit below this line
module.exports = removeFromArray;
