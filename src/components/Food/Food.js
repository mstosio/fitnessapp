import React, {useEffect, useState} from 'react';
import Dish from './Dish';
import { StyledFood } from '../../layout/styledFood/index';

import edamam from '../../api/edamam';
import { Link } from 'react-router-dom';


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
 
    const response =  await edamam.get('/search', {
      params: {
          q: 'high-protein',
          from: 0,
          to: 20
      }
    });
    setDishes(response.data.hits);
  };


  

  return (


      <>
        <StyledFood>  
          {dishes.map(dish => (
              <Link to="/food/dish"><Dish key={1} image={dish.recipe.image} title={dish.recipe.label} /></Link>
            ))}
        </StyledFood>
      </>
    );

}; 
  

export default Food;