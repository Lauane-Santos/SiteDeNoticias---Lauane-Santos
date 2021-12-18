import React from 'react'
import { Link } from 'react-router-dom';
import { List, CurrencyDollar, Cloud, Football, FaceMask  } from 'phosphor-react'

import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
		<Link to='/' className="item">
				<List color="white" size={50}/>
	</Link>
    
    	<Link to='/' className="titulo">
				<b>TOP 1</b>
			</Link>

<Link to='/' className="icones">
				<FaceMask color="white" weight="light" size={40}/> <span className="text-item">SAÚDE</span>
	</Link>

  <Link to='/' className="icones">
				<Football color="white" weight="light" size={40}/>  <span className="text-item">ESPORTE</span>
	</Link>

<Link to='/' className="icones">
				<CurrencyDollar color="white" weight="light" size={40}/>  <span className="text-item">ECONOMIA</span>
	</Link>

<Link to='/' className="icones">
				<Cloud color="white" weight="light" size={40}/>  <span className="text-item">CLIMA</span>
	</Link>

		</div>
	)
}

export default MenuHorizontal
