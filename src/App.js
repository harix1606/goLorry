import React from 'react';
import logo from './logo.svg';
import './bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';
import Navigation from './Components/navbar'
import Places from './Components/PlaceCards'

function App() {
  return (
	<Container>  	  		
		<Navigation/>
		<Row>
			<Places/>
		</Row>

		
	</Container>

	);
   
  
}

export default App;
