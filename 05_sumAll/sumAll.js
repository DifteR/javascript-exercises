const sumAll = function(min, max) {
    let total = 0; 
    if(typeof min != 'number' || typeof max != 'number' || min < 0 || max < 0)
    {
        return 'ERROR';
    }
    else if (max<min) {
        total= min;
        min = max;
        max = total;
        total = 0;
    }
    while(min<=max)
    {
        total += min;
        min++;
    }
   return total;
};

// Do not edit below this line
module.exports = sumAll;
