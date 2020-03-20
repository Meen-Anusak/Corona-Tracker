let table = document.getElementById('countries_stat');


fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "6c96d093bbmsh914bc6f0a4146fcp1c5bf3jsnb61c73ad5efb"
        }
    })
    .then(response => response.json().then(data => {
        let countries_stat = data.countries_stat;
        for (let i = 0; i < countries_stat.length; i++) {
            console.log(countries_stat[i]);
            let row = table.insertRow(i + 1);
            let country_name = row.insertCell(0);
            let cases1 = row.insertCell(1);
            let deaths = row.insertCell(2);
            let serious_critical = row.insertCell(3)
            let recovered_per_country = row.insertCell(4);
            country_name.innerHTML = countries_stat[i].country_name;
            cases1.innerHTML = countries_stat[i].cases;
            deaths.innerHTML = countries_stat[i].deaths;
            serious_critical.innerHTML = countries_stat[i].serious_critical;
            recovered_per_country.innerHTML = countries_stat[i].total_recovered;
        }

    }))
    .catch(err => {
        console.log(err);
    });