import React from 'react'

export default function Title() {
    const now = new Date();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const day = now.getDay();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
 
    const dateImage = {
        background: `url("https://www.kakaocorp.com/page/calendar/light/ico_date${date}.gif") no-repeat 0 94px / 72px 72px`
    }
    return (
        <section className="main-title">
            <h2 className="screen-out">홈 본문</h2>
            <div className="wrap-fit">
                <h3 className='tit-main' style={dateImage}>
                    <em className="emph-tit">오늘의 카카오</em>
                    <span>{month}월 {date}일 {week[day]}요일 소식입니다</span>
                </h3>
            </div>
        </section>
    )
}
