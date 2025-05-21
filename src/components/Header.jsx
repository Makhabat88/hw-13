import React from 'react'
import styled from 'styled-components';
import BasketIcon from '../assets/basket.png';

//defaultProps
export const Header = (props) => {
    const { mealsCount = 0} = props;

  return (
    <StyledHeader>
        <Wrapper>
           <Title>ReactMeals</Title>
            <BasketWrapper>
                <img src={BasketIcon} alt="basket" />
                <YourCardDiv>Your cart</YourCardDiv>
                <CountofMeals>{mealsCount}</CountofMeals>
            </BasketWrapper>
      
        </Wrapper>
    </StyledHeader>
 
  )
};
const StyledHeader = styled.header`
    background: ${({theme}) => theme.colors.cherry};
    color: white;
    position: fixed;
    width: 100%;
    z-index: 9999;
`;

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    padding: 21px 0px;
   
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: 600;
`
const BasketWrapper = styled.div`
    background: ${({theme}) => {
        return theme.colors.darkCherry
    }};
    border-radius: 30px;
    padding: 20px 33px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const YourCardDiv = styled.div`
    font-weight: 600;
    margin-left: 12px;
    margin-right: 24px;

` ;

const CountofMeals = styled.span`
    width: 51px;
    height: 35px;
    border-radius: 30px;
    background: ${({theme}) => theme.colors.cherry};
    display: flex;
    align-items: center;
    justify-content: center;

`

