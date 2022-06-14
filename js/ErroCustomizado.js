class Noticia {
  set titulo(titulo) {
    this._titulo = titulo;
  }
  get tituloNoticia() {
    return this._titulo
  }

  set data(data) {
    this._data = data;
  }
  get dataNoticia() {
    return this._data;
  }


  set autor(autor) {
    this._autor = autor;
  }
  get autorNoticia() {
    return this._autor
  }

  set descricao(descricao) {
    this._descricao = descricao;
  }
  get descricaoNoticia() {
    return this._descricao;
  }

  set link(link) {
    this._link = link;
  }
  get linkNoticia() {
    return this._link;
  }

  get mostrarNoticia() {
    try {
      return this.noticiaNova();
    } catch (erro) {
      return erro
    } finally {
      console.log("Rodando")
    }
  }

  noticiaNova() {
    if (this._titulo != "") {

      return `
       <div class="noticia" data-aos="fade-up" data-aos-duration="1000">
        <a href="${this._link}"><h1>${this._titulo}</h1></a>
        <p class="mt-2">${this._data}</p>
        <p class="mt-2">${this._autor}</p>
        <p class="descricao">${this._descricao}</p>
        </div>
      `

    } else {

      throw new CustomError("Noticia Incompleta.")
    }

  }

}