import React from 'react';
import { StyledFoodCategory,  StyledFoodCategoryList, StyledFoodCategoryItem  } from '../../layout/styledFood/index';


const FoodCategory = (props) => {

    
  
    return (
        <StyledFoodCategory>
            <StyledFoodCategoryList>
                <StyledFoodCategoryItem onClick={() => props.setCategory("balanced")}>Balanced</StyledFoodCategoryItem>
                <StyledFoodCategoryItem onClick={() => props.setCategory("high-protein")}>High Protein</StyledFoodCategoryItem>
                <StyledFoodCategoryItem onClick={() => props.setCategory("high-fiber")}>High fiber</StyledFoodCategoryItem>
                <StyledFoodCategoryItem onClick={() => props.setCategory("low-fat")}>Low Fat</StyledFoodCategoryItem>
                <StyledFoodCategoryItem onClick={() => props.setCategory("low-carb")}>Low carb</StyledFoodCategoryItem>
                <StyledFoodCategoryItem onClick={() => props.setCategory("low-sodium")}>Low sodium</StyledFoodCategoryItem>
            </StyledFoodCategoryList>
        </StyledFoodCategory>
    );
};

export default FoodCategory;