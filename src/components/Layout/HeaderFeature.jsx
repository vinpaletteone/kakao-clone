import React from 'react'

export default function HeaderFeature({...props}) {
    return (
        <section className='header-feature'>
            <div className="inner-path">
                <h3 className="screen-out">현재 페이지 위치</h3>
                <div className="wrap-tit">
                    <img src={props.imageUrl} alt={`${props.day}요일`} />
                    <strong className="tit-path">{props.headerTitle}</strong>
                </div>
            </div>
        </section>
    )
}
