import { Component } from "react";
import './explorerStyles.css'
import imageP from  '../assets/image1.jpg'
import imageP2 from  '../assets/pincel.jpg'
function renderCard(card, index) {
  fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  return (
    <div class="card custom" key={index}>
      <img src={card.image} class="card-img-top size-img" alt="imagen_pincel" ></img>
      <div class="card-body">
        <h5 style={{color:"black"}}class="card-title">{card.title}</h5>
        <p class="card-text max">{card.descripcion}</p>
      </div>
    </div>)
}
export default class explorer extends Component {
  
  constructor(props) {
    super(props);
    this.cards = [
      { image: imageP, title: "card 1", descripcion: "hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material" },
      { image: imageP2, title: "card 2", descripcion: "hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material" },
      { image: imageP, title: "card 3", descripcion: "hola soy la card 3" },
      { image: imageP2, title: "card 4", descripcion: "hola soy la card 4" },
      { image: imageP, title: "card 5", descripcion: "hola soy la card 5" },]

  }
  render() {
    return (
      <div>
        <div class="row header border">
          <h1>Explore el talento en UsArt</h1>
          <p style={{color:"white"}}>Miles de personas ofrecen servicios de arte diariamente</p>
        </div>
        <div class="grid ">
          {this.cards.map(renderCard)}
        </div>
      </div>)
  }


}