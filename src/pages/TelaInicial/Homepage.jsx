import React from 'react';
import './homeStyle.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { use } from 'react';
import logo from '../../assets/logo.png'


// Componente Tela Inicial Minimalista
const HomeScreenMinimalist = () => {
  const navigate = useNavigate(); // Hook de navegação

  return (
    <div className="home-screen-minimalist">
      <img src={logo} alt="Logo do software" width={300} className='logoSoftware'/>
      <h1 className="title-minimalist">Bem vindo</h1>
      <p className="subtitle-minimalist">Gestão de pratos</p>
      <button 
        className="entry-button-minimalist"
        onClick={() => navigate('/cadastrarprato')}
      >
        Cadastrar Prato
      </button>
      <button 
        className="entry-button-minimalist"
        onClick={() => navigate('/cardapio')}
      >
        Cardápio
      </button>
    </div>
  );
};

// Componente Principal da Aplicação Minimalista
const HomePage = () => {
  return (
    <>
      <div className="app-container-minimalist">
        <HomeScreenMinimalist />
      </div>
    </>
  );
};

export default HomePage;
