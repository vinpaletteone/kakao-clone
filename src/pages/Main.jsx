import React, { useState } from 'react'
import { Header, Footer, Title, ItemCard, ClickBtn, Culture, ItemCard2, Etc } from '../js/component';
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
        'help' : {
            "name" : '고객센터',
            "image" : 'https://www.kakaocorp.com/page/ico_customer.png',
            "description" : '고객센터 아이콘'
        },
        'privacy' : {
            "name" : '카카오 프라이버시',
            "image" : 'https://www.kakaocorp.com/page/ico_privacy.png',
            "description" : '카카오 프라이버시 아이콘'
        }
    }

    return (
        <>
            <Header isDark={isDark} setDarkProps={e => setDarkProps(e)} />
            <main>
                <Title isDark={isDark} />
                <ItemCard icon={icon} />
                <Culture />
                <ItemCard2 icon={icon} />
                <Etc />
                <ClickBtn />
            </main>
            <Footer />
        </>
    )
}
