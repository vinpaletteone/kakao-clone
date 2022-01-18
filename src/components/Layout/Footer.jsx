import React from 'react'
import footerList from '../../db/footerList.json'
import '../../styles/_footer.scss'
import FooterNav from './FooterNav';

export default function Footer() {
    return (
        <footer>
            <div className="inner-footer">
                <section className='section-service clear'>
                    <h2 className="screen-out">하단 메뉴</h2>
                    {
                        footerList.map((item, index)=> <FooterNav key={index} item={item}/>)
                    }
                </section>
            </div>
        </footer>
    )
}
