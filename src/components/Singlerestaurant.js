import React from 'react'
import '../App.css'
import {Card, Button} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function SingleRestaurant({restaurant}){
    return(
        
        <Card key={restaurant.id} className="bd-dark text-black mt-5" style={{ width: '18rem',margin: '0.5rem' }} >
        <Card.Img variant="top" src={restaurant.photoUrl} alt="restaurant pic" className="resize" />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>{restaurant.cuisine}</Card.Text>
          <Card.Text>{restaurant.rating}</Card.Text>
          <Card.Text>{restaurant.address}</Card.Text>
        </Card.Body>
      </Card>
      
    )
}


export default SingleRestaurant