import React, {useEffect, useState} from 'react';
import Dish from './Dish';
import FoodCategory from './FoodCategory';
import { StyledFood, StyledFoodWrapper } from '../../layout/styledFood/index';
import edamam from '../../api/edamam';
import { Link } from 'react-router-dom';


const Food = () => {

  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState('high-protein');

  useEffect(() => {
    getDishes(category);
  }, [category]);

  

  const getDishes = async (selectedCategory) => {
 
    const response =  await edamam.get('/search', {
      params: {
          q: selectedCategory,
          from: 0,
          to: 20
      }
    });
    setDishes(response.data.hits);
  };



  return (
      <>
        <StyledFoodWrapper>
          <FoodCategory setCategory={setCategory}/>
          <StyledFood>  
            {dishes.map((dish, index) => (
              <Link to="/food/dish" >
                <Dish key={index}  image={dish.recipe.image} title={dish.recipe.label} />
              </Link>
              ))}
          </StyledFood>
        </StyledFoodWrapper>
      </>
    );

}; 
  

export default Food;