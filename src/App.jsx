import { useState } from 'react'
import './App.css'
import { People } from './components/People'

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'Daniel Camargo',
      role: 'Backend Developer',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
    },
    {
      id: 2,
      name: 'Sandra Alfonso',
      role: 'Engienner support',
      img: 'https://bootdey.com/img/Content/avatar/avatar8.png'
    },
    {
      id: 3,
      name: 'Ramiro Requelme',
      role: 'QA',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
    },
  ])

  return (
    <>
      <People people={people} setPeople={setPeople} />
    </>
  )
}

export default App
