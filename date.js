// our module to  format date

exports.formatDate = function (){

    let today = new Date();

    let options = {
    year : 'numeric',
    month : 'short',
    weekday  : 'long',
    day : 'numeric'
    };
    return today.toLocaleDateString('en-US',options);
     
};
// module keyword denotes this file
// exports is a object that will be exposed as module

// U can export different functions and variables 

exports.Module_Name = "date.js";

// for seeing all the objects,function,variables of this file which are getting exposed to outer world
// console.log(module.exports); 