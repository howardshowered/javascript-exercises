const findTheOldest = function(arr) {

    let oldest = 0;
    let result;
    const currentDate = new Date();

    for(let person of arr)
    {

        let currentPersonAge;

        if( person.yearOfDeath === undefined)
        {
            currentPersonAge = currentDate.getFullYear() - person.yearOfBirth;
        }
        else
            currentPersonAge = person.yearOfDeath - person.yearOfBirth;

        if(oldest < currentPersonAge)
        {
            oldest = currentPersonAge;
            result = person;
        } 
            

    }

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
