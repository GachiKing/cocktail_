const container = document.querySelector(".container");
const article = document.querySelector('article')
const img = document.querySelector('img')

const loadData = () => {
  const data = JSON.parse(localStorage.getItem("drinks"));
  const id = localStorage.getItem("drinkId");
  const drink = data.drinks.filter((drink) => drink.idDrink == id);
  console.log(drink);
  img.src = drink[0].strDrinkThumb;
  console.log(Array.from(drink[0]));
  for (const [key, value] of Object.entries(drink[0])) {
    if(value !== null){
      article.innerHTML += `<p>${value}</p>`
    } else{
       continue
    }
    console.log(`${key}: ${value}`);
  }
  // strDrinkThumb;
};

window.onload = loadData();