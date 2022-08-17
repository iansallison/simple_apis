//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let list = document.getElementById("quoteList");

function getFetch(){
  let choice = parseInt(document.querySelector('input').value)
  if(!choice || choice < 1){
    choice = 1;
  }
  const url = 'https://api.breakingbadquotes.xyz/v1/quotes/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        data.forEach((item)=>{
          let li = document.createElement("li");
          li.innerHTML =`'${item.quote}'<br>-<span class="author">${item.author}<span>`;
          list.appendChild(li);
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}