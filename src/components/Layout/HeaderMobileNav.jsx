import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import dummy from '../../db/mobileHeader.json'

export default function HeaderMobileNav({isDark, setDarkProps, showMobileNav, setShowMobileNav}) {
    const list = dummy;
    const [showSub, setShowSub] = useState(false);
    const [showFooterInfo, setShowFooterInfo] = useState(false);
    console.log(list)
    const handleListSub = (e) => {
        e.stopPropagation();
        const eleLi = e.target.closest('li');
        showSub ? setShowSub(false) : setShowSub(true);

        eleLi.classList.toggle('on');
    }
    const handleListSubClose = () => {
        document.querySelector('.area-gnb').classList.remove('slide-on')
        setTimeout(()=>{
            if(!(document.querySelector('.area-gnb').classList.contains('slide-on'))){
                setShowMobileNav(false);
                console.log('showFooterInfo', showFooterInfo)
            }
        },300)
    }
    const handleTarget = (e) => e.preventDefault();
    const handleFooterSub = () => showFooterInfo ? setShowFooterInfo(false) : setShowFooterInfo(true);
    const themeChange = () => {
        isDark ? setDarkProps(false) : setDarkProps(true);
    }; 

    useEffect(() => {
        showMobileNav && document.querySelector('.area-gnb').classList.add('slide-on')
    }, []);
    

    return (
        <div className={`area-gnb`}>
            <div className="inner-gnb">
                <strong className="gnb-logo">
                    <a href="/">
                        <span className='screen-out'>Kakao</span>
                        <Logo />
                    </a>
                </strong>
                <nav className="doc-gnb" id='gnbContent'>
                    <h2 className="screen-out">메인메뉴</h2>
                    <ul className='list-gnb'>
                        {
                            list.nav && list.nav.map((i, index)=>{
                                if(index<4){
                                    return (
                                        <li key={index} onClick={handleListSub}>
                                            <a href={i.list ? '#javascript' : i.link} role="button" className={i.list ? 'link' : ''}> 
                                                <img src={i.image} alt={i.description} className="ico-menu" />
                                                <span>{i.name}</span>
                                            </a>
                                            {
                                                i.list && 
                                                <ul className='list-sub'>
                                                    {
                                                        i.list && i.list.map((item, idx)=>{
                                                            return(
                                                                <li role="listitem" key={idx}>
                                                                    <a href={item.link}>
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </nav>
                <div className="group-relation clear">
                    <ul className="list-relation">
                        {
                            list.footer && list.footer.map((i, index)=>{
                                return(
                                    <li key={index} onClick={handleFooterSub} className={showFooterInfo ? 'info-open' : ''}>
                                        <a href={i.list ? '#javascript' : i.link} target='_blank' onClick={handleTarget}>
                                            <span>{i.name}</span>
                                            {
                                                i.list && 
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-arrow"><g fill="none" fillRule="evenodd"><path d="M0 0H9V9H0z" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)"></path> <path d="M8 3L4.5 6 1 3" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)" className="stroke"></path></g></svg>
                                            }
                                        </a>
                                        {
                                            i.list &&
                                            <ul className='list-subinfo'>
                                                    {
                                                        i.list && i.list.map((item, idx)=>{
                                                            return (
                                                                <li key={idx}>
                                                                    <a href={item.link} target='_blank'>
                                                                        <div className="wrap-info clear">
                                                                            <span>{item.name}</span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-outlink"><g fill="none" fillRule="evenodd"><path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)"></path></g></svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                            </ul>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="wrap-util">
                        <button type='button' className='btn-mode' onClick={themeChange}>
                            <span>
                                <span className='screen-out'>{isDark ? '다크' : '라이트'}모드로 변경하기</span>
                                {
                                    isDark ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico-mode-dark"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><g strokeWidth="1.5"><path d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z" transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"></path></g></g></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="ico-mode-light"><g fill="none" fillRule="evenodd"><path strokeWidth="1.6" d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path> <path strokeWidth="1.6" d="M18.973 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path></g></svg>

                                }
                            </span>
                        </button>
                        <button type='button' className='btn-language'>
                            <span>
                                <span className='screen-out'>영어로 보기</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico-language"><g fill="none" fillRule="evenodd"><g strokeWidth="1.35"><path d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path strokeLinejoin="round" d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path></g></g></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <button type='button' className='btn-close' onClick={handleListSubClose}>
                    <span className='screen-out'>메인 메뉴 닫기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-close"><g fill="none" fillRule="evenodd" strokeLinecap="square"><g strokeWidth="1.6"><path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5)"></path> <path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5) matrix(-1 0 0 1 17 0)"></path></g></g></svg>
                </button>
            </div>
        </div>
    )
}
