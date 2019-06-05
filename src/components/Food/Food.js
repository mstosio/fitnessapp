import React, {useEffect, useState} from 'react';
import Dish from './Dish';
import axios from 'axios';


const Food = () => {

  const APP_ID = '1884f1a3';
  const APP_KEY = 'a26c260a68e8bd840e277eac7d108488';
   
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getDishes();
  }, []);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getDishes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setDishes(response.data.hits);
    console.log(response.data.hits);
  };
  return (
      <div>
        <form className="search-form">
          <input type="text" onChange={updateSearch}/>
          {dishes.map(dish => (
            <Dish key={1}/>
          ))}
         
          <Dish/>
        </form>
      </div>
    );

}; 
  

export default Food;