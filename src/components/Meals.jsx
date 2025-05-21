import React from 'react'
import styled from 'styled-components';
import { MealItem } from './MealItem';


export const Meals = (props) => {
    const { meals } = props;
  return (
    <MealsWprapper>
        <MealsContainer>
            {meals.map((meal)=>{
                return <MealItem key={meal.id}{...meal}/>
                })}
             </MealsContainer>
         
    </MealsWprapper>
  )
};

const MealsWprapper = styled.div`
    min-height: 500px;
    background: ${({theme}) => theme.colors.grey};
    padding-top: 100px;
`;

const MealsContainer = styled.div`
    border-radius: 16px;
    background: rgb(255, 255, 255);
    padding: 36px 40px;
    max-width: 1000px;
    margin: 0 auto;

`