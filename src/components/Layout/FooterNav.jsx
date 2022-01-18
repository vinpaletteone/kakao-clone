import React from 'react'

export default function FooterNav({item}) {
    const flag = item.name==='인재 영입' || item.name==='카카오 계정';
    console.log(flag);
    if(!flag){
        return (
            <div className={`wrap-service ${item.name==='뉴스' ? 'wrap-news' : ''}`}>
                <strong className="tit-service">
                    <a href={item.link}>
                        <span role="text">
                            {item.name}
                            {item.name==='고객센터' && <span className="screen-out" data-v-f9d51b02="">사이트 바로가기</span>}
                            <svg data-v-d180c69a="" data-v-f9d51b02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-arrow"><g data-v-d180c69a="" fill="none" fillRule="evenodd"><path data-v-d180c69a="" d="M0 0H9V9H0z" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)"></path> <path data-v-d180c69a="" d="M8 3L4.5 6 1 3" transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)" className="stroke"></path></g></svg>
                        </span>
                    </a>
                </strong>
                <ul role="list" className='list-service'>
                    {
                        item.list && item.list.map((item, index)=>{
                            return  (
                                <li role="listItem" key={index}>
                                    <a href={item.link}>
                                        <span role="text">{item.name}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }else{
        return(
            <strong className="tit-service">
                <a href={item.link}>
                    <span role="text">
                        {item.name}
                        <span className="screen-out" data-v-f9d51b02="">사이트 바로가기</span>
                        <svg data-v-c1d21be8="" data-v-f9d51b02="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" className="ico-outlink"><g data-v-c1d21be8="" fill="none" fillRule="evenodd"><path data-v-c1d21be8="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)"></path></g></svg>
                    </span>
                </a>
            </strong>
        )
    }
}
