import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function Title({...props}) {
    const isMobile = useMediaQuery({
        query : "(max-width:766px)"
    });

    return (
        <section className="main-title">
            <h2 className="screen-out">홈 본문</h2>
            <div className="wrap-fit">
                <h3 className='tit-main' style={props.dateImage}>
                    <em className="emph-tit">{props.headerTitle}</em>
                    <span>{props.month}월 {props.date}일 {props.day}요일 소식{!isMobile && '입니다'}</span>
                </h3>
            </div>
        </section>
    )
}
