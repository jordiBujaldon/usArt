import { Component } from "react";
import './explorerStyles.css'

function renderCard(card, index) {
  return (
    <div class="card box border-0" key={index}>
      <img src={card.image} class="card-img-top size" alt="imagen_pincel" ></img>
      <div class="card-body">
        <h5 style={{color:"black"}}class="card-title">{card.title}</h5>
        <p class="card-text max">{card.descripcion}</p>
        <a href="#/" class="btn btn-primary">Contactar</a>
      </div>
    </div>)
}
export default class explorer extends Component {
  constructor(props) {
    super(props);
    this.cards = [
      { image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg", title: "card 1", descripcion: "hola soy la card 1hola soy la card 1hola soy la cardaaaa 1hola soy laaaa card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1hola soy la card 1" },
      { image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg", title: "card 2", descripcion: "hola soy la card 2" },
      { image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg", title: "card 3", descripcion: "hola soy la card 3" },
      { image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg", title: "card 4", descripcion: "hola soy la card 4" },
      { image: "https://ik.imagekit.io/ikmedia/women-dress-2.jpg", title: "card 5", descripcion: "hola soy la card 5" },]

  }
  render() {
    return (
      <div>
        <div class="row header">
          <h1>Explore el talento en Fiverr</h1>
          <p style={{color:"white"}}>Miles de personas ofrecen servicios de arte diariamente</p>
        </div>
        <div class="grid">
          {this.cards.map(renderCard)}
        </div>
      </div>)
  }


}