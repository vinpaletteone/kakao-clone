import React from 'react'
import dummy from '../db/mainItem.json'
import Item from './Item';

export default function ItemCard2({icon}) {
    const afterList = dummy.main7DaysAfterList;
    return (
        <section className='main-itemCard itemCard2'>
            <div className="section-main">
                <div className="wrap-item">
                    <div className="inner-item">
                        <Item item={afterList[0]} />
                    </div>
                </div>
                <div className="wrap-item">
                    <div className="inner-item layout">
                        <div className="item-card  item-customer card-half">
                            <div className="wrap-cont">
                                <div role="text">
                                    <span className="info-cate">
                                        <img src={icon['help'].image} width="36" height="36" alt={icon['help'.description]} className="ico-cate" />
                                        <span className="txt-cate">{icon['help'].name}</span>
                                    </span>
                                    <strong className="tit-card">어떤 서비스를 도와드릴까요?
                                    </strong>
                                </div>
                                <ul className="list-cs">
                                    <li><a href="" className="link-cs">카카오</a></li> 
                                    <li><a href="" className="link-cs">다음</a></li> 
                                    <li><a href="" className="link-cs">멜론</a></li> 
                                </ul>
                            </div>
                        </div>
                        {
                            afterList.map((item, index) => {
                              return index!==0 && <Item key={index} item={item} />
                            })
                        }
                        <div className="item-card card-half">
                            <div className="wrap-cont">
                                <div role="text">
                                    <span className="info-cate">
                                        <img src={icon['privacy'].image} width="36" height="36" alt={icon['privacy'].name}className="ico-cate" />
                                        <span className="txt-cate">{icon['privacy'].name}</span>
                                    </span>
                                    <strong className="tit-card">데이터의 연결과 보호의 균형을 위한 카카오의 노력</strong>
                                    <span className="info-card"><span className="txt-keyword">#카카오프라이버시</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
