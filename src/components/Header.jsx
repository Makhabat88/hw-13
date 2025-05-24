import React, { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import BasketIcon from '../assets/basket.png';
import { BasketContext } from '../store/BasketProvider';
import {css} from 'styled-components';

//defaultProps
export const Header = (props) => {
    const {onOpen} = props; // Себетти ачуу функциясын props аркылуу алабыз
    const {meals} = useContext(BasketContext); // Контексттен тамактардын тизмесин алабыз

    const [animation, setAnimation] = useState(false); // анимация абалы (on/off)

    // meals массивиндеги бардык тамактардын суммардык саны
    const mealCountReduce = meals.reduce((prev, curr) => {
        return prev + +curr.amount; // "+" менен санга айлантуу
    }, 0);

    // meals өзгөргөн сайын анимацияны иштетүү (useEffect)
    useEffect(() => {
        setAnimation(true); // анимация башталат

        // 500 миллисекунддан кийин анимация өчөт
        const timer = setTimeout(() => {
            setAnimation(false);
        }, 500);

        // Компонент жок кылынса таймерди тазалоо
        return () => {
            clearTimeout(timer);
        }
    }, [meals]);

    return (
        <StyledHeader>
            <Wrapper>
                <Title>ReactMeals</Title> {/* Логотип же сайттын аты */}

                <BasketWrapper onClick={onOpen} animation={animation}>
                    <img src={BasketIcon} alt="basket" />
                    <YourCardDiv>Your cart</YourCardDiv>
                    <CountofMeals>{mealCountReduce}</CountofMeals>
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
`;

const jumping = keyframes`
    from {
        transform: translateY(-5px);
    }
    to {
        transform: translateY(5px);
    }
`;

function animate(props) {
    const {animation} = props;

            if (!animation) {
                return css``; // анимация өчүрүлгөндө эч нерсе колдонулбайт
            };

    return css`
       animation: ${jumping} 0.1s linear infinite alternate-reverse;
    `;
}

const BasketWrapper = styled.div`
    background: ${({theme}) => {
        return theme.colors.darkCherry
    }};
    border-radius: 30px;
    padding: 20px 33px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        ${animate} 
    }
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

