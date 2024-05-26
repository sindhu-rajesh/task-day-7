const countries = [
    { name: "Nigeria", continent: "Afric"},
    { name: "china", continent: "Asia"},
    { name: "India", continent: "Asia"},
    { name: "Nepal", continent: "Asia"},
    { name: "Angola", continent: "Africa"},
    { name: "Greece", continent: "Europe"},
    { name: "Kenya", continent: "Africa"},
    { name: "Greece", continent: "Europe"}
    ]
    
    let asianCountries = countries.filter (country => {
    return country.continent === "Asia";
    })
    
    console.log(asianCountries);