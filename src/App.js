import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList.js'
import SearchBar from './SearchBar.js';
import Yelp from "./utils/api.js";
import {React, useState} from "react";
//const business = {

  //image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  //name: 'MarginOtto Pizzeria',
  //address: '1010 Paddington Way',
  //city: 'Bordertown',
  //state: 'NY',
  //zipcode: '10101',
  //category: 'ITALIAN',
  //rating: '4.5 stars',
  //reviewCount: '90 reviews'
  
  
  //};

//const businesses = [business, business, business, business, business, business];

function App() {
  const [businesses, setBusinesses] = useState([]);

 //storing inputted restaurant search data and returning it using Yelp.search
  const searchYelp = async (cousine, location, sortBy) => {
    const businesses = await Yelp.search(cousine, location, sortBy);
    //console.log(response);
    setBusinesses(businesses);
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>ravenous</h1>
      
      </header>
     
      <SearchBar searchYelp={searchYelp}/>
      <div className='BusinessList'>
      <BusinessList businesses = {businesses}/>
      </div>

    </div>
  );
}

export default App;
