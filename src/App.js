import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'

// let restaurants = [
//   {
//     name: 'Trattoria Romana',
//     address: '9999 SW Rome',
//     cuisine: 'Italian',
//     rating: 5,
//     photoUrl:
//       'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
//   },
//   {
//     name: 'Fazzolis',
//     address: '9515 Kingston Pike, Knoxville, TN 37922',
//     cuisine: 'Italian',
//     rating: 4.5,
//     photoUrl:
//       'http://www.restaurantnews.com/wp-content/uploads/2019/08/Fazolis-New-Restaurant-Design-Paves-the-Way-for-the-Future.jpg',
//   },
//   {
//     name: 'Carrabbas Italian Grill',
//     address: '6909 SW 18th St',
//     cuisine: 'Italian',
//     rating: '4',
//     photoUrl:
//       'http://pennsylvaniarestaurantinspections.com/wp-content/uploads/2020/02/carrabbas-italian-grill-lancaster-restaurant-food-safety-inspection.jpg',
//   },
//   {
//     name: 'La Carreta',
//     address: '301 N University Dr, Pembroke Pines, FL 33024',
//     cuisine: 'cuban',
//     rating: '5',
//     photoUrl:
//       'https://lh3.googleusercontent.com/proxy/EF0PSbdGN-qY-MkRY4B-JeVio4ASapjD9d6sBuJqNmAsY_4myWYlmipqvtrhilOJffVgnauPWapxEx9Q7EeI1aEvYffN6wvhvKbZbNum5eGovWfh2ZMrTw',
//   },
//   {
//     name: 'Caribbean Grill Cuban Restaurant',
//     address: '4660 W Hillsboro Blvd B-9, Coconut Creek, FL 33073',
//     cuisine: 'cuban',
//     rating: '3',
//     photoUrl:
//       'https://images.squarespace-cdn.com/content/v1/56e9b42e9f72666d4d23ae4c/1509638086927-GG03F2QUPL9U5GPUP074/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/Store+Front+copy.png',
//   },
// ];

function App() {
  const [restaurants, setRestaurants] = useState(null)
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err))
  }, [])

  function handleSubmit(e) {
    console.log('get it', text)
    console.log(e)
    e.preventDefault()

    const newRestaurant = {
      name: {text},
      address: 'her house',
      rating: 9,
    }
    fetch('https://bocacode-intranet-api.web.app/restaurants',{
      method:'POST',
      headers:{ 
        'content-Type':'application/json'
      },
      body:JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((status) => console.log(status))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <header>
        <span>{`Hi ${text}`}</span>
        <form>
          <label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </label>
          <button onClick={(e) => handleSubmit(e)}>click me</button>
        </form>
      </header>
      <>
        {!restaurants ? (
          <p>Locating Restaurants...</p>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <div key={restaurant.id} className="cardField ">
                <div className="App-header ">
                  <div className="card">
                    <img
                      src={restaurant.photoUrl}
                      alt="restaurant pic"
                      className="resize"
                    />
                    <div className="container">
                      <h2>{restaurant.name}</h2>
                      <span>Address:{restaurant.address}</span>
                      <p>Cuisine:{restaurant.cuisine}</p>
                      <span>rate:{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </>
    </div>
  )
}

export default App
