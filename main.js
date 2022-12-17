// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//-------------- Question 1 --------------//

function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;

}

console.log(createUser('John', 'Doe'));
console.log(createUser('Mesi', 'Kaleziq'));



//------------------- Question 2 -------------------//

function setAge(userObject, age) {
    // add new age field to the user object
    userObject.age = age;
    return userObject;
}
console.log(setAge({ firstName: 'Tim', lastName: 'Horton' }, 50));


//------------------- Question 3 -------------------//


//------------------- Question 4 -------------------//


//------------------- Question 5 -------------------//


//------------------- Question 6 -------------------//


//------------------- Question 7 -------------------//


//------------------- Question 8 -------------------//


//------------------- Question 9 -------------------//




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
