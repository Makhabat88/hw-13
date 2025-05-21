import styled from "styled-components";
import MealsBg from '../assets/meals.png'

export const Summary = () => {

    return (
        <MealsWrapper>
            <TextWrapper>
                <h3>Delicious Food, Delivered To You</h3>
                <h4>Choose your favorite meal from our broad selection of available meals and enjoy a delicious <br />
                lunch or dinner at home.
                </h4>
                <h5>All our meals are cooked with high-quality ingredients, just-in-time and of course by <br />
                 experienced chefs!
                </h5>
            </TextWrapper>
        </MealsWrapper>
    )
};

const MealsWrapper = styled.div`
background: url(${MealsBg}) center center/cover no-repeat;
min-height: 432px;
position: relative;
display: flex;
justify-content: center;
align-items: end;
`;

const TextWrapper = styled.div`
    padding: 36px 54px;
    background: ${({theme}) => theme.colors.grey};
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 853px;
    border-radius: 16px;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
    color: white;
    position: absolute;
    bottom: -70px;

h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    margin-bottom: 28px;
}

h4 {
    font-size: 16px;
    font-weight: 500;
}

h5 {
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 24px;

}
`