import React from 'react';
import './App.css';
import { startTransition } from 'react';
import './components/Field.jsx' ;
import './components/Information.jsx' ;
import './components/GameLayout.jsx';
import { Field } from './components/Field.jsx';

export const Game = () => {
	
	return (
		<div className="App">
			<Field />
			
		</div>
	);
};
