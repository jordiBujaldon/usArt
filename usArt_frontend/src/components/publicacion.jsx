import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import imageP from '../assets/not-found-image.jpg'
import imageP2 from '../assets/pincel.jpg'
import "./publicacion.css"



function Publicacion(props) {

    const { id } = useParams()
    const [card, setCard] = useState([])

    const cards = [
        { author: "Pepito", price: 5000, image: imageP, title: "card 1", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan nunc vel sapien scelerisque rhoncus. Etiam sed pretium ante. Nulla malesuada accumsan mi, sit amet scelerisque nunc venenatis vel. Sed fermentum ante augue, vel maximus risus consectetur at. Donec suscipit sapien et rutrum bibendum. Suspendisse pulvinar purus tellus, ac ultricies enim accumsan quis. Nunc sapien metus, convallis et lorem a, faucibus fermentum ante. Nulla hendrerit nunc eu velit ultrices, sed egestas velit mattis. Fusce congue placerat massa, non cursus tellus volutpat sit amet. Aliquam aliquet nunc id leo sagittis, at fermentum risus scelerisque. Maecenas volutpat aliquet lobortis. Etiam rhoncus elit dui, a tempor est rhoncus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan nunc vel sapien scelerisque rhoncus. Etiam sed pretium ante. Nulla malesuada accumsan mi, sit amet scelerisque nunc venenatis vel. Sed fermentum ante augue, vel maximus risus consectetur at. Donec suscipit sapien et rutrum bibendum. Suspendisse pulvinar purus tellus, ac ultricies enim accumsan quis. Nunc sapien metus, convallis et lorem a, faucibus fermentum ante. Nulla hendrerit nunc eu velit ultrices, sed egestas velit mattis. Fusce congue placerat massa, non cursus tellus volutpat sit amet. Aliquam aliquet nunc id leo sagittis, at fermentum risus scelerisque. Maecenas volutpat aliquet lobortis. Etiam rhoncus elit dui, a tempor est rhoncus ac." },
        { image: imageP2, title: "card 2", descripcion: "hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material hola soy la card 1 y vendo vestidos de boda hechos a mano con el mejor material" },
        { image: imageP, title: "card 3", descripcion: "hola soy la card 3" },
        { image: imageP2, title: "card 4", descripcion: "hola soy la card 4" },
        { image: imageP, title: "card 5", descripcion: "hola soy la card 5" },]


    useEffect(callApi, [])

    function callApi() {
        /*fetch(
          "http://localhost:8000/catalog/")
          .then((res) => res.json())
          .then(data => {
            setCard(data)
          }
          )*/
        setCard(cards)
    }

    if (card.length === 0) return <div class="errorApi"><h1>Cargando..</h1></div>

    function renderCard(card, index) {
        if (index === 0) return (
            <div class="carousel-item active" data-bs-interval="30000">
                <img src={card.image} class=" img-slider" alt="..."></img>
            </div>
        )
        return (
            <div class="carousel-item" data-bs-interval="30000">
                <img src={card.image} class="img-slider" alt="..."></img>
            </div>
        )
    }
    function renderButtons(card, index) {
        const label_i = "Slide " + (index + 1)
        const index_ = (index)
        console.log("label:", label_i)
        console.log("index:", index_)
        if (index_ === 0) return (
            <button class="active"
                type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to={index_}
                aria-label={label_i} aria-current="true" ></button>
        )

        return (
            <button
                type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to={index_}
                aria-label={label_i}></button>
        )
    }



    return (
        <div class="publicacion">
            <div class="custom-container">
                <div id="carouselExampleControls" class="carousel carousel-dark  slide" data-bs-ride="carousel"  >
                    <div class="carousel-indicators">
                        {card.map(renderButtons)}
                    </div>
                    <div class="carousel-inner " >
                        {card.map(renderCard)}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body custom-body ">
                    <div class="grid" style={{justifyContent:"left",marginInlineStart:"0%"}}>
                        <h1 style={{ color: "black" }}>{card[0].author}</h1>
                        <div class="ratings">
                            <div class="empty-stars"></div>
                            <div class="full-stars" style={{ width: "70%" }}></div>
                        </div>
                    </div>
                    <h4 style={{ color: "black" }}>{card[0].price}€</h4>
                    <hr></hr>
                    <p style={{ color: "black" }}>{card[0].descripcion}</p>
                    <hr></hr>
                    <div style={{ textAlign: "right", marginBottom: "1%" }}>
                        <button class="button" style={{ verticalAlign: "middle" }}><span>Contactar </span></button>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Publicacion;