import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList.js'
import SearchBar from './SearchBar.js';

const business = {

  image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipcode: '10101',
  category: 'ITALIAN',
  rating: '4.5 stars',
  reviewCount: '90 reviews'
  
  
  };

  const businesses = [business, business, business, business, business, business];

function App() {
  const searchYelp = (cousine, location, option) => {
    console.log(`Searching Yelp with ${cousine}, ${location}, ${option}`);
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
