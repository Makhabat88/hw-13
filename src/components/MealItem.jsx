import styled from "styled-components";

//statfull
//statless
export const MealItem = (props) => {
    const {description, id, price, title} = props;
  return (
    <StyledDiv>
    <MealItemDescription
    description = {description}
    price = {price}
    title = {title}
    />
    <MealItemAction/>
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

const MealItemAction = () => {
    return (
        <div>
            <div>
                <StyledLabel htmlFor="">Amount</StyledLabel>
                <StyledInput type="number" />
            </div>
            <button>+ Add</button>
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

const StyledDiv = styled.div`
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