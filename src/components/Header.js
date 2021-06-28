
import React, { useContext } from 'react'
import { UserContext } from '../App'
import '../App.css'
import { Button, Form, FormControl } from 'react-bootstrap'

function Header() {
  const { newRestaurant, setNewRestaurant } = useContext(UserContext)

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
    <>
    <div className="sideNav">
   <p>Add New Restaurant</p>
   
   <Form className="addForm">
     <div>
   <label>
   Name:
     <FormControl name="name" type="text" placeholder="Search" className="mr-sm-2"
     onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
     />
     </label>
     <label>
       Address:
       <FormControl name="Address" type="text" placeholder="Search" className="mr-sm-2"
         onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })
         }
       />
     </label>
     <label>
       Rating:
       <FormControl name="Rating" type="text" placeholder="Search" className="mr-sm-2"
         onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })
         }
       />
     </label>
     <label>
     photoUrl:
       <FormControl name="photoUrl" type="text" placeholder="Search" className="mr-sm-2"
         onChange={(e) =>
           setNewRestaurant({
             ...newRestaurant,
             photoUrl: e.target.value,
           })
         }
       />
     </label>
     </div>
     <Button className="addButton" variant="outline-info" onClick={(e) => handleSubmit(e)}>Submit</Button>
   </Form></div>
  </>
  )
}

export default Header
