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

    const icon = {
        "promise" : {
            "name" : "약속과 책임",
            "image" : "https://www.kakaocorp.com/page/ico_responsible.png",
            "description" : "약속과 책임 아이콘"
        },
        "stock" : {
            "name" : "주가정보",
            "image" : "https://www.kakaocorp.com/page/ico_stock.png",
            "description" : "주가정보 아이콘"
        },
    }

    return (
        <>
            <Header isDark={isDark} setDarkProps={e => setDarkProps(e)} />
            <main>
                <Title isDark={isDark} />
                <ItemCard icon={icon} />
                <ClickBtn />
            </main>
            <Footer />
        </>
    )
}
