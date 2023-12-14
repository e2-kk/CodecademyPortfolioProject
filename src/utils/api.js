const apikey = '';



//Component for fetching restaurant data from YELP API

const Yelp = {
    //Parameters for searching restaurant data from YELP API
    search(cousine, location, sortBy) {
      return fetch(
        //URL for fetching requested data from the endpoint and preppened url to bypass YELP's restrictions 
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${cousine}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            //Autorization to URL, YELP API requires authorization
            Authorization: `Bearer ${apikey}`,
          },
        }
      ) //returns JSON reponse and converts it to an object
        .then((response) => {
        
          return response.json();
        })
        //JSON businnesses object is returned as an array of businesses data arrays 
        .then((jsonResponse) => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }));
          }
        });
    },
  };
  
  export default Yelp;