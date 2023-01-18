import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListParcel from './pages/ListParcel/ListParcel'
import { Route, Routes } from 'react-router-dom'
import DescriptionParcel from './pages/DescriptionParcel/DescriptionParcel'
import SelectedParcel from './pages/SelectedParcel/SelectedParcel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proyecto-EstadoParcelario" element={<Home />} />
        <Route path={"/lista-parcelas"} element={<ListParcel />} />
        <Route path={"/descripcion-parcelas"} element={<DescriptionParcel />} />
        <Route path="/parcela/:id" element={<SelectedParcel />} />

        <Route path={"/Proyecto-EstadoParcelario/lista-parcelas"} element={<ListParcel />} />
        <Route path={"/Proyecto-EstadoParcelario/descripcion-parcelas"} element={<DescriptionParcel />} />
        <Route path="/Proyecto-EstadoParcelario/parcela/:id" element={<SelectedParcel />} />

        <Route path="*" element={<>ERROR...!!!</>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
