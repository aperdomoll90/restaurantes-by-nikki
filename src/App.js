
import './App.css'
import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'


export const UserContext = createContext(null)
function App() {
  const [newRestaurant, setNewRestaurant] = useState({})
  return (
    <UserContext.Provider value={{ newRestaurant, setNewRestaurant }}>
    <section className="App">
    <Header />
    <Main />
     </section>
     </UserContext.Provider>
  )
}

export default App
