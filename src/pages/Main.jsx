import React, { useState } from 'react'
import { Header, Footer, Title, ItemCard, ClickBtn } from '../js/component';
import '../styles/_main.scss'

export default function Main() {
    const [isDark, setDark] = useState(false);

    const onChange = ({ target }) => {
      target.checked ? setDark(true) : setDark(false);
    }; 
  
    const setDarkProps = (e) => {
      setDark(e)
    }

    return (
        <>
            <Header isDark={isDark} setDarkProps={e => setDarkProps(e)} />
            <main>
                <Title isDark={isDark} />
                <ItemCard />
                <ClickBtn />
            </main>
            <Footer />
        </>
    )
}
