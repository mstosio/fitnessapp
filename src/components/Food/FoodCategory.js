import React from 'react';
import { StyledFoodCategory,  StyledFoodCategoryList, StyledFoodCategoryItem  } from '../../layout/styledFood/index';


const FoodCategory = ({ changeCategory }) => {

    const onItemSelect = (props) => {
        console.log(event.target.dataset.categeory);
    };

    
    return (
        <StyledFoodCategory>
            <StyledFoodCategoryList>
                <StyledFoodCategoryItem data-categeory="balanced" onClick={onItemSelect}>Balanced</StyledFoodCategoryItem>
                <StyledFoodCategoryItem data-categeory="high-protein" onClick={onItemSelect}>High Protein</StyledFoodCategoryItem>
                <StyledFoodCategoryItem data-categeory="high-fiber" onClick={onItemSelect}>High fiber</StyledFoodCategoryItem>
                <StyledFoodCategoryItem data-categeory="low-fat" onClick={onItemSelect}>Low Fat</StyledFoodCategoryItem>
                <StyledFoodCategoryItem data-categeory="low-carb" onClick={onItemSelect}>Low carb</StyledFoodCategoryItem>
                <StyledFoodCategoryItem data-categeory="low-sodium" onClick={onItemSelect}>Low sodium</StyledFoodCategoryItem>
            </StyledFoodCategoryList>
        </StyledFoodCategory>
    );
};

export default FoodCategory;