const fibonacci = function(inputNum) {
    parseInt(inputNum);
    let i = 4;
    if(inputNum > 0)
    {
        let sequence = [1, 1, 2, 3];
            while(i <= inputNum){
                sequence.push((sequence[i-1])+(sequence[i-2]));
                i++;
            }
        return sequence[inputNum-1];
    }
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
