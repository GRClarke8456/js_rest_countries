console.log("Hi");
// Create a variable connected to the #country section
let countryName;
// Fetch Function
const getCountryByName = (countryName) => {
    // countryName argrument
    // Fetch request
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
        console.log(response);
        return response.json();
    })  
    .then((jsonData) => {
        console.log(jsonData);
    })

    const countryInfoSection = document.querySelector("#countries");
    //  countryInfo.textContent = 
    jsonData.name.forEach((country) => {
        const countryInfo = document.createElement("h2");
        countryInfo.textContent = country;

        countryInfoSection.appendChild(countryInfo);
    });
}

getCountryByName("japan");

// What we want now
// Take the output from function to use on webpage
// Use name property - done

// Use .appendChild() to display country's info
// countryInfo.appendChild();