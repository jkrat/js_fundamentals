1
// GIVEN
// console.log(hello);                                   
// var hello = 'world';  
// AFTER HOISTING
var hello;
console.log(hello);                                   
hello = 'world';    
// OUTPUT
undefined

2
// GIVEN
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// AFTER HOISTING
var needle;
function test(){
	var needle;
	needle = 'magnet';
	console.log(needle);
}   
needle = 'haystack';
test();
// OUTPUT
magnet

3
// GIVEN
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);  
// AFTER HOISTING
var brendan;
function print(){
    brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);  
// OUTPUT
super cool

4
// GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }  
// AFTER HOISTING
var food;
function eat(){
	var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// OUTPUT
chicken
half-chicken

5
// GIVEN
// mean();
// console.log(food);
// function mean() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// AFTER HOISTING
mean();
console.log(food);
var mean = function() {
	var food;
	food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);
// OUTPUT
error (mean not defined)

6
// GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING
var genre;
function rewind() {
    var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// OUTPUT
undefined
rock
r&b
disco

7
// // GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo); 
// // AFTER HOISTING
function learn() {
	var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo); 
// OUTPUT
san jose
seattle
burbank
san jose

8
// GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// AFTER HOISTING
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// OUTPUT
error (dojo attempting to reassigne constant)