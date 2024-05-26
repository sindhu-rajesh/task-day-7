const countries2 = [
    {name: " nigeria",contient:"Africa",population:100123},
    {name: " china",contient:"Asia",population:270123},
    {name: " india",contient:"Asia",population:240123},
    {name: " Nepal",contient:"Asia",population:100123},
    {name: " Angola",contient:"Africa",population:100123},
    {name: " Greece",contient:"Europe",population:100123},
    {name: " Kenya",contient:"Africa",population:100123},
    {name: " London",contient:"Europe",population:55123}
]
let asianCountries2 = countries2.filter(country =>
    country.population < 200000);
    console.log(asianCountries2);