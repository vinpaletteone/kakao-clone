import React, { useState } from 'react'
import BodyClassName from 'react-body-classname'
import '../../styles/_header.scss'
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive';
import HeaderMobileNav from './HeaderMobileNav';
import SearchLayer from './SearchLayer';
import list from '../../db/nav.json'

export default function Header({isDark, setDarkProps, icon}) {
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [showHeaderNav, setShowHeaderNav] = useState(false);

    const pc = useMediaQuery({
        query : "(min-width:1024px)"
    });
    const isTablet = useMediaQuery({
        query : "(max-width:1023px)"
    });

    const themeChange = () => {
      isDark ? setDarkProps(false) : setDarkProps(true);
    }; 


    const handleSearch = () => {
        window.scrollTo(0, 0);
        setShowSearchModal(true);
        setTimeout(() => {
            document.querySelector('.area-search').classList.add('active');
        }, 0);
    }

    const handleMobileNav = () => {
        setShowMobileNav(true);
    }

    const handleClick = (e) => {
        showHeaderNav ? setShowHeaderNav(false) : setShowHeaderNav(true);
        document.querySelectorAll('.list-gnb-li').forEach((item)=>{
            if(e.target.closest('li')===item) return;
            item.classList.remove('on');
        })
        e.target.closest('li').classList.toggle('on');
    }

    //다른 영역 클릭시 닫히기
    document.addEventListener('click', (e)=>{
        if(e.target.className==='list-gnb-li-a') return false;
        if(document.querySelector('.list-gnb-li.on')!==null){
            document.querySelector('.list-gnb-li.on').classList.remove('on');
        }
    })

    return (
        <BodyClassName className={isDark ? 'dark' : 'light'}>
            <header className={`header ${isTablet ? 'type2' : ''}`}>
                <div className="wrap-header clear">
                    <h1 className="doc-title float-left">
                        <a href="/">
                            <span className="screen-out">KaKao</span>
                            <Logo props={isDark} />
                        </a>
                    </h1>
                    {
                        pc && 
                        <>
                            <nav id="gnbContent" className="doc-gnb">
                                <h2 className="screen-out">메인메뉴</h2>
                                <ul className="list-gnb">
                                    {
                                        list && list.map((i, index)=> {
                                            return (
                                                <li key={index} onClick={handleClick} className='list-gnb-li'>
                                                    <a href={i.list ? '#javascript' : i.link} className='list-gnb-li-a'>{i.name}</a>

                                                    {
                                                        i.list && 
                                                        <ul className='list-sub'>
                                                            {i.list && i.list.map((item, idx)=>{
                                                                return(
                                                                    <li key={idx}>
                                                                        <a href={item.link}>{item.name}</a>

                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                            <div className="area-util float-right">
                                <strong className="screen-out">유틸 기능</strong>
                                <button onClick={handleSearch}>
                                    <span className="screen-out">검색창 열기</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico_search ico"><g fill="none" fillRule="evenodd"><g strokeWidth="1.6"><g transform="translate(-308 -16) translate(312 20)"><circle cx="8.944" cy="8.944" r="8.944"></circle> <path d="M14.987 14.987L21.017 21.017"></path></g></g></g></svg>
                                </button>
                                <button>
                                    <span className="screen-out">영어로 보기</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico_language ico"><g fill="none" fillRule="evenodd"><g strokeWidth="1.35"><path d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path strokeLinejoin="round" d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path></g></g></svg>
                                </button>
                                <button onClick={themeChange}>
                                    <span className="screen-out">다크모드로 변경하기</span>
                                    {!isDark &&
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico_mode_dark ico"><g  fill="none" fillRule="evenodd" strokeLinejoin="round"><g  strokeWidth="1.5"><path  d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z" transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"></path></g></g></svg>
                                    }
                                    {isDark &&
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="ico_mode_light ico"><g  fill="none" fillRule="evenodd"><path  strokeWidth="1.6" d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path> <path  strokeWidth="1.6" d="M18.973 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path></g></svg>
                                    }
                                </button>
                            </div>
                        </>
                    }
                    {
                        isTablet && 
                        <> 
                            <button type="button" className='btn-hamburger' onClick={handleMobileNav}>
                                <span className="screen-out">메인 메뉴 열기</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-hamburger"><g fill="none" fillRule="evenodd"><path strokeLinejoin="round" strokeWidth="1.6" d="M19.96 8.88V6.578c0-3.842-4.4-6.272-9.827-6.272S.306 2.736.306 6.578V8.88H19.96z" transform="translate(-360 -16) translate(364 19)" className="stroke"></path> <path strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.6" d="M.306 12.414c1.228 0 1.228 1.18 2.456 1.18s1.228-1.18 2.456-1.18 1.228 1.18 2.455 1.18c1.229 0 1.229-1.18 2.457-1.18 1.228 0 1.228 1.18 2.455 1.18 1.229 0 1.229-1.18 2.457-1.18 1.23 0 1.23 1.18 2.46 1.18 1.229 0 1.229-1.18 2.458-1.18" transform="translate(-360 -16) translate(364 19)" className="stroke"></path> <g strokeLinejoin="round" strokeWidth="1.6" className="stroke"><path d="M10.133.25H.306v1.966c0 1.087.881 1.968 1.967 1.968h15.72c1.086 0 1.967-.881 1.967-1.968V.25h-9.827" transform="translate(-360 -16) translate(364 19) translate(0 17.192)"></path></g> <path d="M5.6 5.8c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8.442 0 .8.358.8.8M11.6 5.8c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8.442 0 .8.358.8.8M8.6 3.8c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8.442 0 .8.358.8.8M13.6 3.8c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8.442 0 .8.358.8.8M16.6 5.8c0 .442-.358.8-.8.8-.442 0-.8-.358-.8-.8 0-.442.358-.8.8-.8.442 0 .8.358.8.8" transform="translate(-360 -16) translate(364 19)" className="fill"></path></g></svg>
                            </button>
                            <button type='button' className='btn-search' onClick={handleSearch}>
                                <span className="screen-out">검색창 열기</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-search"><g fill="none" fillRule="evenodd"><g strokeWidth="1.6"><g transform="translate(-308 -16) translate(312 20)"><circle cx="8.944" cy="8.944" r="8.944"></circle> <path d="M14.987 14.987L21.017 21.017"></path></g></g></g></svg>
                            </button>
                        </>
                    }
                    {
                        (isTablet && showMobileNav) && <HeaderMobileNav isDark={isDark} setDarkProps={setDarkProps} setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav} />
                    }
                </div>
                { showSearchModal ? <SearchLayer setShowSearchModal={setShowSearchModal} showSearchModal={showSearchModal} /> : null}
            </header>
        </BodyClassName>
    )
}
