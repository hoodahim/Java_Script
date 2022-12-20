'use strict';

const api = 'https://api.tvmaze.com/search/shows?q='
document.querySelector(`#form`).addEventListener("submit", function (evt) {
  evt.preventDefault();
  const keyword = document.querySelector(`#keyword`).value;
  search(`${api}${keyword}`);
});





async function search(url) {
  try {
    const response = await fetch(url);
    if(!response.ok) throw new Error(`Invalid input!`);
    const result = await response.json();
    console.log(result);
    document.querySelector('#search-result').innerHTML ='';
    for(let a of result){
      const sec = document.createElement('section');
      sec.id = `section`;
      const h4 = document.createElement('h4');
      h4.innerHTML = `Name: ${a["show"]["name"]}`;
      sec.append(h4);

      //const button = document.createElement('button');
      //button.id = "button";
      //button.innerHTML = "Link to details";
      //sec.append(button);

      //const button_clicked = document.querySelector('#button');



      const url = document.createElement('a');
      url.innerHTML = `Link to details`;
      url.target = `_blank`;
      url.href = `${a["show"]["url"]}`;
      sec.append(url);

      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const picture = a["show"]["image"];
      //default_image =  'https://via.placeholder.com/100x200?text=text+here';
      //img.src = `${a["show"]["image"]["medium"]}`;
      //!picture.ok ? img.src = `${a["show"]["image"]["medium"]}`: img.src = default_image;
      if (picture === null){
        img.src = `https://via.placeholder.com/100x200?text=text+here`;}
      else{
        img.src = `${a["show"]["image"]["medium"]}`;}
      figure.append(img);
      const  figcaption = document.createElement('figcaption');
      figure.append(figcaption);
      sec.append(figure);
      const summary = document.createElement('p');
      summary.innerHTML = `${a["show"]["summary"]}`
      sec.append(summary);
      document.querySelector('#search-result').append(sec);
      const genre = document.createElement('p');
      genre.innerHTML = `Genre: `
      const length = a["show"]["genres"].length;
      for (let i = 0; i<length ; i++){
        genre.append(`${a["show"]["genres"][i]} | `);
      }
      sec.append(genre);






    }


  } catch (error){}
}


