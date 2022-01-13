import React, { useState } from 'react'
import BodyClassName from 'react-body-classname'
import '../../styles/_header.scss'
import Logo from './Logo';

export default function Header({isDark, setDarkProps}) {
    // const [isDark, setDark] = useState(false);

    const themeChange = () => {
        console.log(isDark)
      isDark ? setDarkProps(false) : setDarkProps(true);
    }; 

    return (
        <BodyClassName className={isDark ? 'dark' : 'light'}>
            <header>
                <div className="wrap-header clear">
                    <h1 className="doc-title float-left">
                        <a href="/">
                            <span className="screen-out">KaKao</span>
                            <Logo props={isDark} />
                        </a>
                    </h1>
                    <nav id="gnbContent" className="doc-gnb">
                        <h2 className="screen-out">메인메뉴</h2>
                        <ul className="list_gnb">
                            <li>
                                <a href="/">카카오</a>
                            </li>
                            <li>
                                <a href="/">뉴스</a>
                            </li>
                            <li>
                                <a href="/">기술과 서비스</a>
                            </li>
                            <li>
                                <a href="/">약속과 책임</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="area-util float-right">
                        <strong className="screen-out">유틸 기능</strong>
                        <button>
                            <span className="screen-out">검색창 열기</span>
                            <svg data-v-ae75f7f2="" data-v-9760bdba="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico_search ico"><g data-v-ae75f7f2="" fill="none" fillRule="evenodd"><g data-v-ae75f7f2="" strokeWidth="1.6"><g data-v-ae75f7f2="" transform="translate(-308 -16) translate(312 20)"><circle data-v-ae75f7f2="" cx="8.944" cy="8.944" r="8.944"></circle> <path data-v-ae75f7f2="" d="M14.987 14.987L21.017 21.017"></path></g></g></g></svg>
                        </button>
                        <button>
                            <span className="screen-out">영어로 보기</span>
                            <svg data-v-41fcfff3="" data-v-9760bdba="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico_language ico"><g data-v-41fcfff3="" fill="none" fillRule="evenodd"><g data-v-41fcfff3="" strokeWidth="1.35"><path data-v-41fcfff3="" d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path data-v-41fcfff3="" strokeLinejoin="round" d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path> <path data-v-41fcfff3="" d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811" transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"></path></g></g></svg>
                        </button>
                        <button onClick={themeChange}>
                            <span className="screen-out">다크모드로 변경하기</span>
                            {!isDark &&
                            <svg data-v-9f42629e="" data-v-9760bdba="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico_mode_dark ico"><g data-v-9f42629e="" fill="none" fillRule="evenodd" strokeLinejoin="round"><g data-v-9f42629e="" strokeWidth="1.5"><path data-v-9f42629e="" d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z" transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"></path></g></g></svg>
                            }
                            {isDark &&
                            <svg data-v-5fa5aeb3="" data-v-9760bdba="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="ico_mode_light ico"><g data-v-5fa5aeb3="" fill="none" fillRule="evenodd"><path data-v-5fa5aeb3="" strokeWidth="1.6" d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path> <path data-v-5fa5aeb3="" strokeWidth="1.6" d="M18.973 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z" transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"></path></g></svg>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </BodyClassName>
    )
}
