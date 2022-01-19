import React from 'react'
import Logo from './Logo'

export default function SearchLayer() {
    return (
        <section className='search-layer'>
            <div className="inner-layer">
                <div className="layer-head">
                    <strong>
                        <a href="">
                            <span className="screen-out">KaKao</span>
                            <Logo />
                        </a>
                    </strong>
                </div>
                <div className="layer-body">
                    <h2 className="screen-out">검색</h2>
                    <div className="area-search">
                        <div className="group-search">
                            <form action="" className="wrap-search">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-search-bold"><title >검색</title> <g fill="none" fillRule="evenodd"><g transform="translate(-333 -214) translate(309 192) translate(24 22)"><path d="M0 0H28V28H0z"></path> <circle cx="12.944" cy="12.944" r="8.944" strokeWidth="2.5" className="stroke"></circle> <path d="M18.987 18.987L25.017 25.017" strokeWidth="2.5" className="stroke"></path></g></g></svg>
                                <input type="text" id="inpSearch" placeholder="무엇이 궁금하신가요?"/>
                                <label htmlFor="inpSearch" className="screen-out">검색어</label>
                            </form>
                            <div className="wrap-tag">
                                <a href="" className='link-tag'>#유니세프</a>
                                <a href="" className='link-tag'>#digital for kids</a>
                                <a href="" className='link-tag'>#아동청소년</a>
                                <a href="" className='link-tag'>#카카오계열사</a>
                            </div>
                        </div>
                    </div>
                    <button className="btn-close">
                        <span className="screen-out">검색창 닫기</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-close"><g fill="none" fillRule="evenodd" strokeLinecap="square"><g strokeWidth="1.6"><path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5)"></path> <path d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5) matrix(-1 0 0 1 17 0)"></path></g></g></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
