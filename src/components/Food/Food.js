import React, {useEffect, useState} from 'react';
import Dish from './Dish';
import FoodCategory from './FoodCategory';
import { StyledFood, StyledFoodWrapper } from '../../layout/styledFood/index';
import edamam from '../../api/edamam';
import { Link } from 'react-router-dom';


const Food = () => {

  const [dishes, setDishes] = useState([]);


  useEffect(() => {
    getDishes();
  }, []);



  // const changeCategory = (category) => {
  //   contiune
  // };
 
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
        <StyledFoodWrapper>
          <FoodCategory changeCategory={changeCategory}/>
          <StyledFood>  
            {dishes.map(dish => (
                <Link to="/food/dish"><Dish key={1} image={dish.recipe.image} title={dish.recipe.label} /></Link>
              ))}
          </StyledFood>
        </StyledFoodWrapper>
      </>
    );

}; 
  

export default Food;