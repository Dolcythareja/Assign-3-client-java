
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
