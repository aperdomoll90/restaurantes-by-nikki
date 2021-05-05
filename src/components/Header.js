import React, { useEffect, useState } from 'react'
import '../App.css'
import AddNewForm from './AddNewForm'
import { Navbar, Button, Form, Nav, FormControl,Label  } from 'react-bootstrap'

function Header() {
  const [newRestaurant, setNewRestaurant] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    fetch('https://bocacode-intranet-api.web.app/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((status) => console.log(status))
      .catch((err) => console.log(err))
  }

  console.log(newRestaurant)
  return (
<AddNewForm handleSubmit='handleSubmit' newRestaurant='newRestaurant' setNewRestaurant='setNewRestaurant'/>
  )
}

export default Header
