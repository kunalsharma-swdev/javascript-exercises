const sumAll = function(num1, num2) {
    if(num1 <0 || num2<0){
        return 'ERROR';
    }
    if(num1%1!=0 || num2%1!=0){
        return 'ERROR';
    }
    if(typeof num1 === "string" || typeof num2 === "string"){
        return 'ERROR'
    }
    let sum =0;
    if(num1>num2){
        for(let i = num2;i<=num1;i++){
            sum+=i;
        }
    }
    
    else{
        for(let i = num1;i<=num2;i++){
            sum+=i;
        }
    }
    return sum;
};

sumAll();

// Do not edit below this line
module.exports = sumAll;
