import React from 'react'
import Logo from './Logo'

export default function HeaderMobileNav({icon}) {
    return (
        <div className='area-gnb'>
            <div className="inner-gnb">
                <strong className="gnb-logo">
                    <a href="">
                        <span className='screen-out'>Kakao</span>
                        <Logo />
                    </a>
                </strong>
                <nav className="doc-gnb" id='gnbContent'>
                    <h2 className="screen-out">메인메뉴</h2>
                    <ul className='list_gnb'>
                        <li>
                            <a href="#javascript" role="button">
                                <img src={icon.kakao.image} alt="" className="ico-menu" />
                                <span>카카오</span>
                            </a>
                            <ul className="list-sub">
                                <li role="listitem">
                                    <a href="">카카오문화</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="group-relation">
                    <ul className="list-relation">
                        <li>
                            <a href="" target='_blank'>
                                투자정보
                            </a>
                        </li>
                    </ul>
                    <div className="wrap-util">
                        <button type='button' className='btn-mode'>
                            <span>
                                <span className='screen-out'>다크모드로 변경하기</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico-mode-dark"><g fill="none" fillRule="evenodd" strokeLinejoin="round"><g strokeWidth="1.5"><path d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z" transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"></path></g></g></svg>
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
                <button type='button' className='btn-close'>
                    <span className='screen-out'>메인 메뉴 닫기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-close"><g fill="none" fillRule="evenodd" strokeLinecap="square"><g strokeWidth="1.6"><path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5)"></path> <path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5) matrix(-1 0 0 1 17 0)"></path></g></g></svg>
                </button>
            </div>
        </div>
    )
}
