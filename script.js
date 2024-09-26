/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

/* got really into this assignment and did a bit more than asked with style and functionality,
   but no outside sources were used. I used my prior knowledge from CIT 212. I know we are not
   supposed to use as much inline javascript as I did, but I tried to keep the necessary code
   for the assignment to demonstrate knowledge of this week material still within script.js
*/

inpbox = document.querySelector('.inpbox')
results = document.querySelector('.results')

const allDogs = 
[
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Roxanne",
        breed: "Pitbull-Boxer Mix",
        age: 15
    },
    {
        dogName: "Choochoo",
        breed: "Yorkshire Terrier",
        age: 13
    },
    {
        dogName: "Bebe",
        breed: "American Pitbull",
        age: 6
    },
    {
        dogName: "Crimson",
        breed: "German Shephard",
        age: 1
    },
    {
        dogName: "Kelly Marie",
        breed: "Cane Corso",
        age: 2
    },
    {
        dogName: "Marley",
        breed: "Retriever/Labrador Mix",
        age: 9
    },
    {
        dogName: "Misty",
        breed: "Pappilon",
        age: 6
    },
    {
        dogName: "Nanuk",
        breed: "Siberian Husky",
        age: 1
    },
    {
        dogName: "Appa",
        breed: "American Shorthair",
        age: 3
    },
    {
        dogName: "Rosies",
        breed: "Caliby",
        age: 0
    },
]

function getDogs(ageval) {
    results.innerHTML = ""
    let newarray = []

    allDogs.forEach((item) => {
        if(item.age >= ageval) {
            newarray.push(item)
        }
    });

    newarray.forEach((item) => {
        results.innerHTML+=
        `
        --------------------- <br> </br>
        Name: ${item.dogName}<br> </br>
        Breed: ${item.breed}<br> </br>
        Age: ${item.age}<br> </br>
        `
    });

    inpbox.value = "please input age here"
    return
}
