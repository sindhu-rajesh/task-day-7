const countries5 =[
{name: "Nigeria",currency:"naira"},
{name: "china",currency:"Yuvan"},
{name: "India",currency:"Rs"},
{name:"Nepal",currency:"Nepalese"},
{name:"angola",currency:"Kwanza"}

]
let asianCountries5 = (country)=>{
    return countries5.filter(x=> x.indexOf(country)> -1)
}
console.log(asianCountries5("amer"));