/*
Noticia = tudo menos a imagem
NoticiaDestaque = extends Noticia (no construtor vai ter um super) 
*/

//Define a Classe
class Noticias {


  constructor(title, publishedAt, description, author, url) {
    this.title = title;
    this.publishedAt = publishedAt;
    this.author = author;
    this.description = description;
    this.url = url;
  }

  //Configura como vai aparecer a noticia
 mostrarNoticia() {
  return `<div class="card"><div class="text"><div class="title">

  <img src="${this.urlToImage}"alt=""/>

  <div id="p"><p="Publicado em:">${this.publishedAt}</p></div></h2></div>

  <a class="jayson" href="${this.url}"/><h3>${this.title}</h3></div></a>

  <h3>${this.description}</h3>

 <h2>${this.author} 

 </div>
`;

  }
}

class NoticiaDestaque extends Noticias{
  constructor(title, publishedAt, description, author, url, urlToImage){
   super(title, publishedAt, description, author, url);
     this.urlToImage = urlToImage;
 }
}

/* Puxa o json para o código */
let json = "https://www.luizpicolo.com.br/api.json";
let XHR = new XMLHttpRequest();
  XHR.open("GET", json);
  XHR.responseType = "json"
  XHR.send();

//mostra a noticia no html
XHR.onload = function() {
  
  let noticias = XHR.response;
    const elemento = document.getElementById('list');


  let newnews = `<h1>Últimas notícias</h1>`;
    elemento.insertAdjacentHTML('afterbegin', newnews);


  //cria novo objeto
  let i = 0;
  noticias.articles.forEach(noticia => {
    let noticianohtml;
    if (i == 0) {//vai ter imagem
      noticianohtml = new NoticiaDestaque(noticia.title, noticia.publishedAt, noticia.description, noticia.author, noticia.url,    noticia.urlToImage);
    } else {//não tem imagem
      noticianohtml = new Noticias(noticia.title, noticia.publishedAt, noticia.description, noticia.author, noticia.url);
    }
    i++;
    elemento.insertAdjacentHTML('beforeend', noticianohtml.mostrarNoticia());
  })
}

