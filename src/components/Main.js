import React, { useEffect, useState } from 'react'
import '../App.css'
import SingleRestaurant from './Singlerestaurant'


function Main() {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    < >
    < div className="cardField" >
      {!restaurants ? (
        <p>Locating Restaurants...</p>
      ) : (
        restaurants.map((restaurant) => {
          return (
           <SingleRestaurant restaurant={restaurant}/>
          )
        })
      )}
      </div>
    </>
  )
}

export default Main
