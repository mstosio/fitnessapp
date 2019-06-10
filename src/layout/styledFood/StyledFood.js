import styled from 'styled-components';

export const StyledFood = styled.div`
    
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-row: 400px;
    ${'' /* padding: 50px; */}
    grid-gap: 50px;
`;

export const StyledFoodWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 200px);
`;