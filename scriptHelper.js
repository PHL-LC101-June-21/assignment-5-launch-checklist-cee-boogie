// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//Here is the HTML formatting for our mission target div.
            document.getElementById("missionTarget").innerHTML =`
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">
    `
       
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
        return "Not a Number";
   } else if (typeof(testInput) === "number") {
       return "Is a Number";
   } else {
       return "Empty";
   }
} 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {
        alert("User must fill out all fields.");
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("User must input valid data.");
    }
    
    document.getElementById("pilotStatus").innerHTML = `${pilot} ready for liftoff!`;
    document.getElementById("copilotStatus").innerHTML = `${copilot} ready for liftoff!`;

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        document.getElementById(list).style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
        document.getElementById("launchStatus").style.color = "green";
    }
    if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("fuelStatus").innerHTML = `Fuel is at ${fuelLevel}. Fuel level too low for launch.`;
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    }
    if (cargoMass > 10000) {
        document.getElementById("faultyItems").style.visibility = 'visible';
        document.getElementById("cargoStatus").innerHTML = `Cargo is at ${cargoMass}. Too much mass for launch.`;
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*(planets.length-1));
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
