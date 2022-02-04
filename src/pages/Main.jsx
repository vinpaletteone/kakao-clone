import React, { useState } from 'react'
import LinkTop from '../components/Layout/LinkTop';
import { Header, Footer, Title, ItemCard, ClickBtn, Culture, ItemCard2, Etc, HeaderFeature, SearchLayer} from '../js/component';
import '../styles/_main.scss'
import '../js/event'

export default function Main() {
    const headerTitle = '오늘의 카카오';
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
        },
        'kakao' : {
            "name" : '카카오',
            "image" : 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65779d87017800001.png',
            "description" : '카카오 라이언 아이콘'
        },
        'news' : {
            "name" : '뉴스',
            "image" : 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/657726a1017800001.png',
            "description" : '뉴스 아이콘'
        },
        'service' : {
            "name" : '기술과 서비스',
            "image" : 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6575c56d017800001.png',
            "description" : '기술과 서비스 아이콘'
        }
    }

    const now = new Date();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const day = now.getDay();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const imageUrl = `https://www.kakaocorp.com/page/calendar/${!isDark ? 'light' : 'dark'}/ico_date${date}.gif`;
    
    const dateImage = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <>
            <Header isDark={isDark} setDarkProps={e => setDarkProps(e)} />
            <HeaderFeature imageUrl={imageUrl} day={week[day]} headerTitle={headerTitle}/>
            <main>
                <Title date={date} month={month} day={week[day]} dateImage={dateImage} headerTitle={headerTitle}/>
                <ItemCard icon={icon} />
                <Culture />
                <ItemCard2 icon={icon} />
                <Etc />
                <ClickBtn />
                <LinkTop />
            </main>
            {/* <SearchLayer /> */}
            <Footer />
        </>
    )
}
