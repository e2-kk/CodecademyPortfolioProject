//Imports

import React from 'react';
import './BusinessList.css';

//import business component and map it to the businessList component

import Business from './Business.js';


const BusinessList = ({ businesses }) => {
    return (
      <div className="BusinessArray">
        {businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })}
      </div>
    );
  };

export default BusinessList;