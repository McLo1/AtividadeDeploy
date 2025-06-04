import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/TelaInicial/TelaInicial";
import CardapioPage from "./pages/TelaCardápio/CardapioPage";
import CadastroPratosPage from "./pages/TelaCadastroPratos/TelaCadastroPratos";

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cardapio" element={<CardapioPage/>} />
        <Route path="/cadastrarPrato" element={<CadastroPratosPage/>} />
      </Routes>
    </BrowserRouter>
    

  )
}

export default App
