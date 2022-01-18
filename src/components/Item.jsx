import React from 'react'

export default function Item({item, itemNew}) {
    console.log(item);
    return (
        <div className="item-card">
            <span className="wrap-cont">
                <span role="text" className="info-cate">
                    <img src={item.category.image} width="36" height="36" alt={item.category.description} className="ico-cate" />
                    <span className="txt-cate">{item.category.name}</span>
                    {(itemNew && itemNew==='Y') && <span className="dot-new">new</span>}
                </span>
                <a href="/" className='link-item'>
                    <strong className="tit-card">{item.title}</strong>
                    <span className="wrap-thumb">
                        <img src={item.image} alt={item.imageDescription} className="thumb-img" />
                    </span>
                </a>
                <span role="text" className="info-card">
                    {item.keywordList.map(item => (
                        <span className="txt-keyword">#{item.name}</span>)
                    )}
                </span>
            </span>
            <button className="btn-share">
                <svg data-v-f9455140="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ico-share"><g data-v-f9455140="" fill="none" fillRule="evenodd"><path data-v-f9455140="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-f9455140="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" className="fill"><circle data-v-f9455140="" cx="2" cy="2" r="2"></circle> <circle data-v-f9455140="" cx="2" cy="10" r="2"></circle> <circle data-v-f9455140="" cx="2" cy="18" r="2"></circle></g></g></svg>
            </button>
    </div>
    )
}
