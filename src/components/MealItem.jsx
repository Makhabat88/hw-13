import styled from "styled-components";
import { Button } from "./UI/Button";
import { useContext, useRef } from "react";
import { BasketContext } from "../store/BasketProvider";


//statfull
//statless
export const MealItem = (props) => {
    const {description, id, price, title} = props; // Пропстардан маалыматтар алынат

    const ctx = useContext(BasketContext); // Контексттен себеттин функцияларын алабыз

    const inputRef = useRef(null); // Input элементине сылтама

    const onSubmit = (e) => {
        e.preventDefault(); // Форманын стандарттык жүктөлүшүн токтотуу

        // Себетке кошуу үчүн тамактын маалыматтары
        const mealinfo = {
            price: price,
            title: title,
            id: id,
            amount: inputRef.current.value, // Колдонуучунун киргизген саны
        };

        ctx.addToBasket(mealinfo); // Контексттин методун чакырып себетке кошуу
    }
  
    return (
        <StyledDiv onSubmit={onSubmit}>
            <MealItemDescription
                description={description}
                price={price}
                title={title}
            />
            {/* Колдонуучу канча тамак кошо турганын көрсөтүүчү бөлүк */}
            <MealItemAction ref={inputRef} />
        </StyledDiv>
    );
};

const MealItemDescription = ({description, price, title}) => {
return (
    <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescr>{description}</StyledDescr>
        <MealItemPrice>{price}</MealItemPrice>
    </div>
)
};

const MealItemAction = (props) => {
    const {ref} = props;
    return (
        <div>
            <div>
                <StyledLabel htmlFor="">Amount</StyledLabel>
                <StyledInput 
                type="number" 
                ref={ref} 
                defaultValue='1' // Баштапкы мааниси 1
                // value={ref.current.value}
                />
            </div>
            <Button type='submit' variant = {'Addplus'} title={'Add'}/>
        </div>
    )
};


const StyledLabel = styled.label`
    color: rgb(34, 34, 34);
    font-size: 18px;
    font-weight: 600;
`;

const StyledInput = styled.input`
  
    padding: 8px 8px;
    border-radius: 8px;
    color: rgb(34, 34, 34);
    font-weight: 500;
    width: 60px;
    border: none;
    border: 1px solid grey;
    outline: none;
    margin-left: 20px;
`

const StyledDiv = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(214, 214, 214);
    box-shadow: 0px 6px 12px 0px rgba(36, 36, 36, 0.08);
`;
const StyledTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 4px;

`;

const StyledDescr = styled.div`
    font-style: italic;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`;

const MealItemPrice = styled.div`
    color: ${({theme})=>theme.colors.orange};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 4px;
   
`