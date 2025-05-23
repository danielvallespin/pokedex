import { useState } from 'react'
import './App.css'
import CargaPokeball from './components/cargaPokeball/CargaPokeball'
import Pokedex from './components/pokedex/Pokedex'

function App() {

  const [cargando, setCargando] = useState(true);

  return (
    <>
      <CargaPokeball cargando={cargando}/>
      <Pokedex 
      cargando={cargando}
      setCargando={setCargando}
      />
    </>
  )
}

export default App;
