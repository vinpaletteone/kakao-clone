import React, { useState } from 'react'
import dummy from '../../db/footer.json'
import '../../styles/_footer.scss'
import FooteRelation from './Footer/FooterRelation';
import FooterNav from './Footer/FooterNav';

export default function Footer() {
    const [infoOpen, setInfoOpen] = useState(false);
    const handleSubInfo = (e) => {
        e.preventDefault();
        infoOpen ? setInfoOpen(false) : setInfoOpen(true)
    }

    return (
        <footer>
            <div className="inner-footer">
                <section className='section-service clear'>
                    <h2 className="screen-out">하단 메뉴</h2>
                    {
                        dummy.footerList.map((item, index)=> <FooterNav key={index} item={item}/>)
                    }
                </section>
                <section className='section-relation clear'>
                    <h2 className="screen-out">서비스 이용정보</h2>
                    <div className="group-info clear">
                        {
                            dummy.FooterRelation.map((item, index)=> <FooteRelation key={index} item={item}/>)
                        }
                    </div>
                    <div className={`wrap-relation ${infoOpen ? 'info-open' : ''}`}>
                        <strong className="tit-relation">
                            <a href="#javascript" role="button" className='clear' onClick={handleSubInfo}>
                                관련사이트
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="ico-plus"><path  d="M6.222 0H7.7780000000000005V14H6.222z" transform="translate(-1414 -643) translate(80 245) translate(1334 398)"></path> <path  d="M6.222 0H7.7780000000000005V14H6.222z" transform="translate(-1414 -643) translate(80 245) translate(1334 398) rotate(90 7 7)"></path></svg>
                            </a>
                        </strong>
                        <ul className='list-subinfo'>
                        {
                            dummy.RelationSite && dummy.RelationSite.map((i, index)=>{
                                return (
                                    <li key={index}>
                                        <a href={i.link} target='_blank'>
                                            <span role='text'>
                                                {i.name}
                                                <span className="screen-out">사이트 바로가기</span>
                                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-outlink"><g data-v-c1d21be8="" fill="none" fillRule="evenodd"><path data-v-c1d21be8="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)"></path></g></svg>
                                            </span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </section>
               <small className="txt-copyright">
                   © <a href="https://www.kakaocorp.com/page/">Kakao Corp.</a>
                   All rights reserved.
               </small>
            </div>
        </footer>
    )
}
