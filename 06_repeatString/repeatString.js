const repeatString = function(str, count) {
    if(count < 0)
        return "ERROR";
    let result = "";
    
    for( let i = 0; i < count; i++)
    {
       result += str;
    }
    
    return result;

    // if(count >= 0)
    //     return str.repeat(count);
    // else
    //     return 'ERROR';

};

// Do not edit below this line
module.exports = repeatString;
