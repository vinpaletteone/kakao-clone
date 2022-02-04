import React from 'react'

export default function FooteRelation({item}) {
    // console.log('item', item);
    return (
        <div className="wrap-info">
            <a href={item.link ? item.link : ''} className={`link-info ${item.name==='위치기반서비스 이용약관' || item.name==='개인정보처리방침' ? 'link-emph' : ''}`}>
                {item.name}
                {
                    item.list && <svg data-v-d180c69a="" data-v-f9d51b02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-arrow"><g data-v-d180c69a="" fill="none" fillRule="evenodd"><path data-v-d180c69a="" d="M0 0H9V9H0z" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)"></path> <path data-v-d180c69a="" d="M8 3L4.5 6 1 3" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)" className="stroke"></path></g></svg>
                }
            </a>
            <ul className="list-subinfo">
                {
                    item.list && item.list.map((i, index)=>{
                        return(
                            <li key={index}>
                                <a href={i.link} target="_blank">
                                    <span role="text">
                                        {i.name}
                                        <span className="screen-out">사이트 바로가기</span>
                                        <svg data-v-c1d21be8="" data-v-f9d51b02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-outlink"><g data-v-c1d21be8="" fill="none" fillRule="evenodd"><path data-v-c1d21be8="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)"></path></g></svg>
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
