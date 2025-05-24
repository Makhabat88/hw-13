// React'тин өзүн жана useState хугу (состояние башкаруу үчүн) алып жатабыз
import React, { useState } from 'react'

// Компоненттерди импорт кылып жатабыз
import { Header } from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { Summary } from './components/Summary'
import { Meals } from './components/Meals'
import { DUMMY_MEALS } from './data'
import Modal  from './components/UI/Modal'
import { Basket } from './components/Basket'

// styled-components үчүн тема түзүп жатабыз.
// Бул объект ичиндеги түстөрдү styled-components менен колдонобуз
const theme = {
  colors: {
    cherry: '#8a2b06',       // негизги күрөң түстүү кызыл түс
    darkCherry: '#5A1F08',   // анын караңгы версиясы
    grey: 'rgb(56, 56, 56)', // боз түс
    orange: 'rgb(173, 85, 2)', // кызгылт-сары түс
    lightGrey: '#B0B0B0',    // ачык боз
    disabled: '#CAC6C4',     // өчүрүлгөн кнопка түсү
    white: '#FFFFFF',        // ак түс
  }
};

// App — негизги компонент, ал бардык UI бөлүктөрүн камтыйт
const App = () => {

  // Корзина терезеси ачыкпы же жокпу, ошону сактаган состояние
  // Башында жабык болот (false)
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  // Корзинаны ачуучу/жабуучу функция
  // Ар бир баскан сайын учурдагы абалды тескери кылат
  const basketHandler = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  // Компоненттин return бөлүгү (экранда көрсөтүлчү UI)
  return (
    // styled-components ThemeProvider'ине тема берип жатабыз
    <ThemeProvider theme={theme}>

      {/* Жогорку бөлүктөгү шапка. 
          onOpen — корзинаны ачуучу функция */}
      <Header onOpen={basketHandler}/>

      {/* Кыскача маалымат тексти */}
      <Summary/>

      {/* Тамактар тизмеси. DUMMY_MEALS — даяр маалымат */}
      <Meals meals={DUMMY_MEALS}/>

      {/* Корзина үчүн модалдык терезе */}
      <Modal onClose={basketHandler} open={isBasketOpen}>
        {/* Модалдын ичиндеги корзина компонент */}
        <Basket onClose={basketHandler}/>
      </Modal>

      {/* Жалпы глобалдык стилдер. 
          body, h1 ж.б. үчүн бирдиктүү стили */}
      <GlobalStyles/>

    </ThemeProvider>
  )
}

// App компонентин сырткы файлдар үчүн экспорт кылып жатабыз
export default App
