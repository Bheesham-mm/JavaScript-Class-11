// ##################### Assignment 11 ###################### \\

// Prompt the user to enter a name and store it in the variable 'data1'
var data1 = prompt("Enter the name");

// Define an array 'dataS' with initial elements: "item2", "item3", "item4"
var dataS = ["item2", "item3", "item4"];

// Check if the entered name is not an empty string
if (data1 !== "") {
    // If true, add the entered name to the beginning of the array 'dataS'
    dataS.unshift(data1);
} else {
    // If the entered name is an empty string, alert the user that the item is not found
    alert("item is not found");
}
if (data1 === "") {
    dataS.splice(0,4)
    dataS.push("Please Reload Page")
}

// Log the final state of the array 'dataS' to the console
console.log(dataS);
            
 // ##################### Assignment 12 ###################### \\

// Prompt the user to enter a fruit name and store it in the variable 'getData'
var getData = prompt("Enter Frout Name");

// Define an array 'froutN' with initial elements: "Apple", "Mango", "Orange", "Banana"
var froutN = ["Apple", "Mango", "Orange", "Banana"];

// Find the index of the entered fruit name in the array 'froutN' and store it in 'data'
// If the item is not found, indexOf returns -1
var data = froutN.indexOf(getData);

// Check if the entered fruit name was found in the array (index is not -1)
if (data !== -1) {
    // If the item is found, remove it from the array using splice
    froutN.splice(data, 1);
    // Add the entered fruit name to the beginning of the array 'froutN'
    froutN.unshift(getData);
} else {
    // If the item is not found, alert the user that the data is not found
    alert("User Data is not Found");
}

// Check if the entered fruit name is an empty string
if (getData === "") {
    // Clear the array 'froutN'
    froutN.splice(0, 4);
    // Add a message to the array 'froutN'
    froutN.push("Please Reload Page And Add Data");
}

// Log the final state of the array 'froutN' to the console
console.log(froutN);
