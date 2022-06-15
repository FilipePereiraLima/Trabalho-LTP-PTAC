/*
Noticia = tudo menos a imagem
NoticiaDestaque = extends Noticia (no construtor vai ter um super) 
*/


class Relatar extends Error{
 constructor(nameErro, relatar){
   super(relatar);
   this.nameErro = nameErro;
   this.message = relatar;
 }
  relatar(){
    return this.nameErro + ":" + this.message
  }
}

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
   /*
  try = tentar, ele vai ficar tentando até achar um erro(throw avisa que é um erro), IF define basicamente oque estaria errado
  */   
   try{
     if(this.title != undefined && this.publishedAt != undefined && this.author != undefined && this.description != undefined && this.url != undefined){
       
     
  return `<div class="card"><div class="text"><div class="title">

   <a class="jayson" href="${this.url}"/><h2>${this.title}</h2></div></a>

  <h3>${this.description}</h3>

  <h3>Autor: ${this.author} </h3>

<div id="p">Publicado em: ${this.publishedAt}</p></div></h2></div>

 </div>
`;
   }else{
    /* throw = jogar / cria uma nova instancia do erro, logo diz que é um erro*/  throw new Ralatar ("Essa noticia não está disponivel no momento.","Tente novamente mais tarde")
   }
  }catch(erro){
   /*catch = pegar / ele recebe o throw */  erro.relatar();
   }
}
}



class NoticiaDestaque extends Noticias{
  constructor(title, publishedAt, description, author, url, urlToImage){
   super(title, publishedAt, description, author, url);
     this.urlToImage = urlToImage;  
 }
   mostrarNoticia() {
  return `<div class="card"><div class="text"><div class="title">

  <img src = ${this.urlToImage}></img>

  <a class="jayson" href="${this.url}"/><h2>${this.title}</h2></div></a>

  <h3>${this.description}</h3>

  <h3>Autor: ${this.author} </h3>

<div id="p">Publicado em: ${this.publishedAt}</p></div></h2></div>

 </div>
`;

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

