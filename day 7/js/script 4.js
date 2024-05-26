const countries4 = [
{name: "Nigeria",contient: "Afica",population:100123},
{name: "China",contient: "Asia",population:270123},
{name: "India",contient: "Asia",population:240123},
{name: "Nepal",contient: "Asia",population:100123},
{name: "Angola",contient: "Afica",population:100123},
{name: "Greece",contient: "Europe",population:100123},
{name: "Kenya",contient: "Afica",population:100123},
{name:"London",contient:"Europe",population:55123}

]
let asianCountries4 = countries4.reduce((acc,current)=>{
    return acc+current.population;
},0);
console.log(asianCountries4);
