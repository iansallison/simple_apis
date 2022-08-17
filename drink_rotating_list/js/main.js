//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
let list = 0;

function getDrink(){
    let drink = encodeURIComponent(document.querySelector('input').value);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if(list > data.drinks.length-1)
      {
        list = 0;
      }
      document.querySelector('h2').innerText = data.drinks[list].strDrink;
      document.querySelector('img').src = data.drinks[list].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[list].strInstructions;
      list++;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

