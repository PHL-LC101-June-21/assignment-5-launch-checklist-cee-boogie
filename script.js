// Write your JavaScript code here!

const { formSubmission, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       return listedPlanets[pickPlanet(listedPlanets)];
   
    })
   
   let form = document.querySelector("form");
   //let button = document.getElementById("formSubmit");
        form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = "faultyItems";
        let pilot = pilotNameInput.value;
        let copilot = copilotNameInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoLevel = cargoMassInput.value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
   })


});