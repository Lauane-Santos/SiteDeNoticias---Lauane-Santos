import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import Busca from './components/Busca'
import NewDetails from './components/NewDetails'
import MenuHorizontal from './components/MenuHorizontal'
import Footer from './components/Footer'
import './App.css';

function App() {
	return (
    <BrowserRouter>
		<div className='grid-container'>
			<MenuHorizontal />
      <Busca />
      <Routes>
					<Route path='/' element={<News />} />
						<Route path=':idNoticia' element={<NewDetails />} />
				</Routes>
			<Footer />
		</div>
    </BrowserRouter>
	);
}

export default App;

