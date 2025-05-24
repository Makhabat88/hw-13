import React, { useContext } from 'react'
import { Button } from './UI/Button'
import styled from 'styled-components'
import { BasketContext } from '../store/BasketProvider';


export const Basket = (props) => {
    const {onClose} = props; // Себетти жабуу үчүн функцияны props аркылуу алабыз
    const ctx = useContext(BasketContext) // Контексттен себеттеги тамактарга жана функцияларга киребиз

    // Жалпы сумма эсептөө: ар бир тамактын баасын жана санын көбөйтүп, суммалап чыгабыз
    const totalAmountOfFood = ctx.meals.reduce((prev, curr) => {
        return prev + (+curr.amount * +curr.price)
    }, 0)

    return (
        <ScrollBar>
            {/* ctx.meals массивиндеги ар бир тамак үчүн BasketItem компоненти чакырылат */}
            {ctx.meals.map((food)=> (
                <BusketItem 
                    key={food.id} 
                    {...food} // бардык пропторду берет: title, price, amount, id
                    onMinus={ctx.removeFromBasket} // - баскычка функция
                    onPlus={ctx.addFromBasket}    // + баскычка функция
                />
            ))}
            
            {/* Жалпы сумма жана заказ же жабуу баскычтары турган бөлүк */}
            <TotalAmount 
                onClose={onClose} 
                totalAmount={totalAmountOfFood}
            />
        </ScrollBar>
    )
}


const BusketItem = (props) => {
    const {title, price, amount, id, onMinus, onPlus} = props; 

    return (
        <BasketItemWrapper>
            <div>
                <StyledTitle>{title}</StyledTitle> {/* Тамактын аты */}
                <Container>
                    <StyledPrice>${price}</StyledPrice> {/* Тамактын баасы */}
                    <StyledAmount>x{amount}</StyledAmount> {/* Канча тамак бар */}
                </Container>
            </div>
            <ButtonBox>
                {/* Азайтуу баскычы */}
                <Button 
                    variant={'PlusMinus'} 
                    title={"-"} 
                    onClick={() => onMinus(id)} // id аркылуу тамакты азайтуу
                />
                {/* Көбөйтүү баскычы */}
                <Button 
                    variant={'PlusMinus'} 
                    title={"+"}
                    onClick={() => onPlus(id)} // id аркылуу тамакты көбөйтүү
                />
            </ButtonBox>
        </BasketItemWrapper>
    )
};


const TotalAmount = (props) => {
    const {onClose, totalAmount} = props;

    return(
        <TotalAmountBox>
            <AmountBox>
                <p>Total Amount</p>
                {/* Жалпы сумма, 2 ондук тактыкта көрсөтүлөт */}
                <TotalAmountBox>${totalAmount.toFixed(2)}</TotalAmountBox>
            </AmountBox>

            {/* Жабуу жана Заказ баскычтары */}
            <ButtonWrappers>
                <Button 
                    onClick={onClose} // себетти жабуу
                    variant={'close'} 
                    title={'Close'}
                />
                <Button 
                    variant={'order'} 
                    title={'Order'} // заказ берүү баскычы (функция азыр жок)
                />
            </ButtonWrappers>
        </TotalAmountBox>
    )
};


const ScrollBar = styled.div`
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;

`

const AmountBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

const ButtonWrappers = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
`

const TotalAmountBox = styled.div`
    margin-top: 30px;
    p{
        color: rgb(34, 34, 34);
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }
`;

const BasketItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 670px;
    border-bottom: 1px solid rgb(214, 214, 214);
    padding-top: 25px;
    padding-bottom: 28px;
`;

const StyledTitle = styled.p`
    color: rgb(34, 34, 34);
    font-size: 20px;
    font-weight: 600;
`

const StyledPrice = styled.div`
    color: rgb(173, 85, 2);
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0px;
`;

const StyledAmount = styled.div`
    box-sizing: border-box;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 6px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

`;
 const Container = styled.div`
    display: flex;
    gap: 42px;
    align-items: center;
    margin-top: 12px;
 `;

 const ButtonBox = styled.div`
    display: flex;
    gap: 20px;
 `;