// Reactтин контекст түзүүчү жана состояние башкаруучу хуктары
import { createContext, useState } from 'react'
import React from 'react'

// Контекстти түзүп жатабыз. Анын баштапкы мааниси — meals: []
// Башка компоненттер ушул контекстти колдонуп, корзинаны көрө алат
export const BasketContext = createContext({
    meals: [],  // meals деген массив болот
});

// BasketProvider деген компонент түздүк.
// Ал өзүнүн children'дерин (ички компоненттерин) камтып турат.
export const BasketProvider = ({children}) => {

  // meals деген состояние. Башында бош массив.
  const [meals, setMeals] = useState([]);

  // Корзинага тамак кошуучу функция
  const addToBasket = (food) => {
    // Ушул кошкону жатабызбы, мурун эле барбы, текшеребиз
    const existingFood = meals.find((item) => item.id === food.id)
    console.log(existingFood); // консольго чыгарып көрөбүз

    if(existingFood) {
      // Эгер тамак мурунтан бар болсо, анын санын кошобуз
      existingFood.amount = +food.amount + +existingFood.amount;
      
      // Массивди жаңылап, setMeals менен кайра беребиз
      const updatedFoods = [...meals];
      setMeals(updatedFoods)
    } else {
      // Эгер жок болсо, массивге жаңы тамакты кошобуз
      setMeals([...meals, food]);
    }
  };

  // Корзинадан 1 даана тамакты алып салуучу функция
  const removeFromBasket = (id) => {
    // Тамакты тап
    const existingFood = meals.find((item) => item.id === id);
    
    if (existingFood.amount === 1) {
      // Эгер сан 1 болсо, такыр эле алып салабыз
      const filteredMeals = meals.filter(
        (item) => item.id !== existingFood.id
      )
      setMeals(filteredMeals)
    } else {
      // Болбосо санын 1ге азайтабыз
      existingFood.amount = existingFood.amount - 1;
      const updateMeals = [...meals];
      setMeals(updateMeals);
    }
  }

  // Корзинадан 1 даана тамак санын кошуучу функция
  const addFromBasket = (id) => {
    // Тамакты тап
    const existingFood = meals.find((item) => item.id === id);
    
    // Санын 1ге көбөйтөбүз
    existingFood.amount = +existingFood.amount + 1;
    const updatedMeals = [...meals];
    setMeals(updatedMeals);
  };

  // Бардык маанилерди value аркылуу контекстке беребиз
  // meals — корзинадагы товарлардын массиви
  // addToBasket — кошуучу функция
  // removeFromBasket — алып салуучу функция
  // addFromBasket — санын көбөйтүүчү функция
  return (
    <BasketContext.Provider value={{
      meals, 
      addToBasket, 
      removeFromBasket, 
      addFromBasket
    }}>
      {children}
    </BasketContext.Provider>
  )
};
