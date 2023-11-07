import React from 'react';
import './SearchBar.css';

//Create component that will display search bar with 2 inputs and button 

//function SearchBar() {
    //return (
       //<div className='SearchBarContainer'>
            
            
            //<div className='Filters'>
            //<h3>Best Match</h3>
            //<h3>Highest Rated</h3>
            //<h3>Most Reviewed</h3>
            //</div>
            //<div className='SearchBusiness'>
            //<input type='text' placeholder='Search Businessses' className='BusinessInput'></input>
            //<input type='text' placeholder='Where?' className='LocationInput'></input>
            //</div>
           
            
        //</div>
    //)
//}

//export SearchBar component to pass it to App function which is rendedred in index.js
//export default SearchBar;


const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
  const SearchBar = () => {
    const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
      });
    };
  
    return (
      <div className='BusineesSearchContainer'>
        <div className='SortingOptions'>
          <ul className='ListOptions'>{renderSortByOptions()}</ul>
        </div>
        <div className='InputsContainer'>
          <hr class='line'></hr>
          <input placeholder="Search Businesses" className='BusinessField'/>
          <input placeholder="Where?" className='LocationField'/>
        </div>
        <div className='SearchButtonContainer'>
          <a className='SearchButton'>Let's Go</a>
        </div>
      </div>
    );
  };
  
  export default SearchBar;