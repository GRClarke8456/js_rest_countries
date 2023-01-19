console.log("Hi");


// Lab review
// Copy the endpoint - https://restcountries.com/v3.1/name/japan
// This endpoint returns an array of objects representing Japan

const getCountryByName = async (countryName) => {
    // fetch - promised based - like a GET request
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    // console.log(jsonData);

    // Add an ul
    const countryDetails = document.createElement("ul");
    const nameLi = document.createElement("li");
    // Need to look at the path
    // Because name is an object, we don't want return the whole object so we return the common name
    nameLi.textContent = jsonData[0].name.common;
    // Check name
    // console.log(jsonData[0].name.common);
    
    const populationLi = document.createElement("li");
    populationLi.textContent = jsonData[0].population;
    // Check population
    // console.log(jsonData[0].population);

    const countryInfoSection = document.querySelector("#countries");
    countryInfoSection.appendChild(countryDetails);
    countryDetails.appendChild(nameLi);
    countryDetails.appendChild(populationLi);
}

const onSearchSubmit = (event) => {
    event.preventDefault();
    // console.log("Form submitted"); - always check the code so far is working
    // console.log(event.target.countrySearch.value) - checking access to form

    getCountryByName(event.target.countrySearch.value);
}
// write this first
const seachForm = document.querySelector("form");
seachForm.addEventListener("submit", onSearchSubmit);

// getCountryByName("japan");