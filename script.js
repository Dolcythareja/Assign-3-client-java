
const apiUrl = "https://restcountries.com/v3.1/name/";

document.getElementById("fetchCountry").addEventListener("click", async () => {
    const country = document.getElementById("country").value.trim();
    const countryInfo = document.getElementById("countryInfo");

    if (!country) {
        countryInfo.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${country}`);
        if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
        }
        const data = await response.json();
        displayCountryInfo(data[0]);
    } catch (error) {
        countryInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
function displayCountryInfo(data) {
    const countryHTML = `
        <h2>${data.name.common}</h2>
        <p><strong>Capital:</strong> ${data.capital ? data.capital[0] : "N/A"}</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Population:</strong> ${data.population.toLocaleString()}</p>
        <p><strong>Flag:</strong></p>
        <img src="${data.flags.svg}" alt="Flag of ${data.name.common}" width="150">
    `;
    document.getElementById("countryInfo").innerHTML = countryHTML;
}
