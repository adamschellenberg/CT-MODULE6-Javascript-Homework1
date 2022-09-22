//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_string, dog_names){
    //Your code goes here
    matched_dogs = [];
    dog_names.forEach((name) => {
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            matched_dogs.push(name);
        }
    })
    console.log(matched_dogs ? "Matched: " + matched_dogs.join(', ') : "No Matches");
}


//Call method here with parameters
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    let i = 0
    while (i < arr.length) {
        arr.splice(i, 1, "even index");
        i += 2;
    }
    return arr;
}
console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]