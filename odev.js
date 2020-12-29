import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
createTableElements([], "singlecity")
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */
/*const mama=data.map((index)=>{

return index.population;
})
console.log(mama);
*/
//populationBigger Buttons
document.querySelector("#populationBigger").addEventListener("click",()=>{
const bigger=data.filter((Bigger)=>{
return Bigger.population> 500000;

}
);
//console.log(bigger);
createTableElements(bigger, "allcities");

});

//landAreaLess
document.querySelector("#landAreaLess").addEventListener("click",()=>{
const area=data.filter((Area)=>{
return Area.landArea < 1000;
});
//console.log(area);
createTableElements(area, "allcities");
});

/// Does any city has population less than 100.000?
document.querySelector("#isPopulationLess").addEventListener("click",()=>{
const doesPopolation=data.some((populationLess)=>{
  return populationLess.population < 100000;

});
if(doesPopolation){alert("YES")}
else{ alert("No")}
//console.log(doesPopolation)
});
//Does every city has land area bigger than 100?
document.querySelector("#isLandBigger").addEventListener("click",()=>{
const isLandBigger=data.every((landBigger)=>{
  return landBigger.landArea > 100;

});
if(isLandBigger){alert("YES")}
else{ alert("No")}

//console.log(isLandBigger);
});

//city select => #selectcity
const dataName1 =data.map(cityName => cityName.name);

dataName1.forEach((element)=>{
const selectCity=document.querySelector(".custom-select");
const creatCities=document.createElement("option");
creatCities.setAttribute("id","selectcity");
creatCities.setAttribute("value",element);
  creatCities.textContent=element;
  selectCity.appendChild(creatCities);
})

//Select 
document.querySelector(".custom-select").addEventListener("change",(event)=>{
 
const selectCities=data.filter((cities)=>{

  return event.target.value === cities.name;

})
//console.log(selectCities)
  createTableElements(selectCities, "singlecity")
  
});
