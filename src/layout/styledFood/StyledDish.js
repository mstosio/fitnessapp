import styled from 'styled-components'; 

export const StyledImageWrapper = styled.div`
    height: 250px;
    overflow: hidden;
`;

export const StyledImage = styled.img`
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform .5s ease;
`;

export const StyledDish = styled.div`
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.lightgray};
    color: #ffffff;
    font-size: 0.7rem;
    overflow: hidden;
    width:100%;

    &:hover ${StyledImage} {
        transform: scale(1.1);
    }
`;



export const StyledDescription = styled.div`
    margin: 0 10px;
`;