import React from 'react'
import '../../styles/_header.scss'

export default function header() {
    return (
        <header>
            <div className="wrap-header">
                <h1>
                    <a href="/">
                        <span>KaKao</span>
                        logo
                    </a>
                    logo
                </h1>
                <nav>
                    <h2>메인메뉴</h2>
                    <ul className="nav-list">
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
                <div className="area-util">
                    <strong>유틸 기능</strong>
                    <button>
                        <span>검색창 열기</span>
                        검색
                    </button>
                    <button>
                        <span>영어로 보기</span>
                        언어
                    </button>
                    <button>
                        <span>다크모드로 변경하기</span>
                        테마
                    </button>
                </div>
            </div>
        </header>
    )
}
