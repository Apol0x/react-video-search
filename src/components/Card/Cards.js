/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
/* Componente Carta de pelicula */
const Card = ({ movie }) => {
    const { Poster, Title, Type, Year } = movie //destructuring del parametro que recibimos
    return ( //retornamos la maqueta del componente rellenando los campos del elemento
        <div className="col-md-4">
            <div className="card">
                <img src={Poster} alt={Title} className="card-img-top" />
                <div className="card-body">
                    <h4>{Title} {Year}</h4>
                    <p>{Type}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
  movie: PropTypes.shape({
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired
  })
}


export default Card;