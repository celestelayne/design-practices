console.log("This code is loading the JavaScript file");

let materials = ["wood", "brick", "broken dishes", "dust", "leaves", "grass"];

let places = [
  "cold, windy climate",
  "desert",
  "deserted airport",
  "deserted church",
  "deserted factory",
  "hot climate",
  "metropolis"
];

let people = [
  "collectors of all types",
  "fishermen and families",
  "french and german speaking people",
  "old friends",
  "horses and birds",
  "little boys",
  "lovers"
];

let thing = [
  "natural light",
  "all available lighting",
  "candles",
  "electricity"
];

function select_random(pick) {
  randomizer = pick[Math.floor(Math.random() * pick.length)];
    return randomizer;
}

// This is the generator function
function generatePoem(n) {
    // Select a random item from each list
    let randomMaterial = select_random(materials);
    let randomPlace = select_random(places);
    let randomThing = select_random(thing);
    let randomPeople = select_random(people);
    
    setTimeout(function () {
        
            
    console.log(
        `A house of ${randomMaterial} \n in a ${randomPlace} \n using ${randomThing} \n inhabited by ${randomPeople}`
    );
    generatePoem();
    clearTimeout(4)
    }, 1000);
    

}
generatePoem(4);

