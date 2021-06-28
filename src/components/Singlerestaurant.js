import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'


function SingleRestaurant({ restaurant }) {

  function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
  // updateProgressBar(myProgressBar, restaurant.rating);
  return (
    <>
    <Card key={restaurant.id} className='bd-dark text-black mt-5 card'>
      <Card.Img src={restaurant.photoUrl} alt='restaurant pic' className='resize' />
      <Card.Body className='infoArea'>
        <Card.Title className='title'>{restaurant.name}</Card.Title>
        {/* <div class='progress'>
          <div class='progress__fill'></div>
          <span class='progress__text'>{restaurant.rating}</span>
        </div> */}
        <Card.Text className='info'>{restaurant.address}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
// {restaurant.rating}</Card.Text>
export default SingleRestaurant
