const main = document.querySelector("main");
let data;

const fetchData = async () => {
  const response = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/search.php?s"
  );
  const json = await response.json();
  data = await json;
  await localStorage.setItem("drinks", JSON.stringify(data));
  loadCocktails(data);
};

window.onload = fetchData();

const loadCocktails = (data) => {
  data.drinks.forEach((cock) => {
    const card = document.createElement("div");
    main.append(card);
    card.innerHTML = `
        <div class="card">
        <img src="${cock.strDrinkThumb}" class='img'alt="">
        <p>${cock.strDrink}</p>
        <div class='btn' onclick='info(${cock.idDrink})'><span>More Info </span><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
       </div>
        `;
  });
};

const info = (id) => {
  localStorage.setItem("drinkId", id);
  location.href = "info.html";
};






