const getTheTitles = function(arrayOfBooks) {
    let titles = [];
    for (let i = 0; i < arrayOfBooks.length; i++) {
        titles.push(arrayOfBooks[i].title); 
        
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
