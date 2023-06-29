
const firstName = "Vladislav";
const lastName = "Sicotorschi";
const yearsOfStudy = "3 months";
const goal = "learn as much as i can, aswell as apply that knowledge";

let myDiv = document.getElementById("aboutMe");
myDiv.innerHTML = "My Name is " + firstName +" "+ lastName + ". I have been at SCC for " + yearsOfStudy + " and i plan to "+ goal + " after completing my courses.";