import React, {useState} from 'react';
import styles from './SearchBar.module.css';




//Create component that will display search bar with 2 inputs and button 



const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
  const SearchBar = ({ searchYelp }) => {
  
    const[cousine, setCousine] = useState('');
    const[location, setLocation] = useState();
    const[searchOption, setSearchOption] = useState("best_match");
    

  //function that stores sreach option and updates it

  const handleOptionChange = (option) => {

    setSearchOption(option);
  }

  //function that will chnage colour of searchOption to orange wwhen it will be clicked on 
 
  const handleOptionColourChange = (option) => {
    if (searchOption === option ) {
      return styles.active;
    }
    return "";
  };
  
  

  //function that stores the value of entered cuisine and updates it
  const handleCousineChange = (event) => {
    const cousine = event.target.value;
    setCousine(cousine);
  };

//function that stores the value of location and updates it 
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setLocation(location);
  };
    
//function that receives entered cousine and location
  const handleSearchButton = (event) => {
    //
    event.preventDefault();
    searchYelp(cousine, location, searchOption);
  }

  

  const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li className={handleOptionColourChange(sortByOptionValue)} key={sortByOptionValue} onClick = {() => {handleOptionChange(sortByOptionValue);}} >{sortByOption}</li>;
      });
    };

    

  
    return (
      <div className={styles.BusineesSearchContainer}>
        <div className={styles.SortingOptions}>
          <ul className={styles.ListOptions}>{renderSortByOptions()}</ul>
        </div>
       
        <div className={styles.InputsContainer}>
        <hr className={styles.line}></hr>
          
          <input id="cousine" placeholder="Enter Cousine" className={styles.BusinessField} onChange={handleCousineChange}/>
          <input id="location" placeholder="Where?" className={styles.LocationField} onChange={handleLocationChange}/>
          
        </div>
        <div className={styles.SearchButtonContainer}>
          <a onClick={handleSearchButton} className={styles.SearchButton}>Search</a>
        </div>
        
      </div>
    );
  };
  
  export default SearchBar;

  