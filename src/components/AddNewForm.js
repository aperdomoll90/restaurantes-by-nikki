import React from 'react'
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap'

function AddNewForm(newRestaurant,setNewRestaurant, handleSubmit) {
  return (
    <Navbar fixed="top" bg="light" variant="light">
      <Navbar.Brand href="#home">{!newRestaurant ? 'Welcome' : `Hi ${newRestaurant.name}`}</Navbar.Brand>
     
      <Form inline>
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
       
        <Button variant="outline-info" onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
    </Navbar>
  )
}

export default AddNewForm
