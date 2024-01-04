const detailCard = document.createElement("div");

detailCard.style.border = "1px solid";
detailCard.style.borderRadius = "4px";
detailCard.style.textAlign = "center";
detailCard.style.padding = "5px";
detailCard.style.display = "inline-block";

const getrandomcocktail = async () => {
  const inpElem = document.querySelector("input");
  if (inpElem.value) {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const cocktails = await response.json();

    const cocktail = cocktails.drinks[0];

    detailCard.innerHTML = `<h3>${cocktail.strDrink}</h3>
    <img src="${cocktail.strDrinkThumb}" height="200px" width="200px"/>
    <p>Id: ${cocktail.idDrink}</p>
    <p>Category: ${cocktail.strCategory}</p>
    <p>Tag: ${cocktail.strTags}</p>
    <p>Glass: ${cocktail.strGlass}</p>
    <p>Ingredient1:${cocktail.strIngredient1}</p>
    <p>Ingredient2:${cocktail.strIngredient2}</p>
    <p>Ingredient3:${cocktail.strIngredient3}</p>
    <p>Ingredient4:${cocktail.strIngredient4}</p>
    <p>Instruction: ${cocktail.strInstructions}</p>`;
    document.body.appendChild(detailCard);
  }
  inpElem.value = "";
};
