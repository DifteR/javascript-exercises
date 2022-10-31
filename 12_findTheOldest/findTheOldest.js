const findTheOldest = function(arrayOfPeople) {
    let ageOfCurrentPerson;
    let currentOldest = 0;
    let nameOfOldest = "";
    let currentYear = new Date().getFullYear();
    for(i = 0; i < arrayOfPeople.length; i++){
        if (!arrayOfPeople[i].yearOfDeath) {
            ageOfCurrentPerson = currentYear - arrayOfPeople[i].yearOfBirth;
        }
        else{
            ageOfCurrentPerson = arrayOfPeople[i].yearOfDeath - arrayOfPeople[i].yearOfBirth;
        }
        if (ageOfCurrentPerson > currentOldest) {
            currentOldest = ageOfCurrentPerson;
            nameOfOldest = arrayOfPeople[i]; 
        }
    }
    return nameOfOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
