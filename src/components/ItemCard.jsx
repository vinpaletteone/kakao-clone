import React from 'react';
import dummy from '../db/mainItem.json'
import Item from './Item';

export default function ItemCard({icon}) {
    console.log(dummy);
    console.log(dummy.main7DaysBeforeList);
    const beforeList = dummy.main7DaysBeforeList;
    
    console.log(beforeList);
    // console.log(beforeList[0]);
    return (
        <section className='main-itemCard'>
            <div className="section-main">
                <div className="wrap-item">
                    <div className="inner-item">
                        <Item item={beforeList[0]} itemNew={'Y'}/>
                    </div>
                </div>
                <div className="wrap-item">
                    <div className="inner-item">
                        {
                            beforeList.map((item, index) => {
                              return index!==0 && <Item item={item} />
                            })
                        }
                        <div className="item-card card-half item-stock">
                            <a href="https://www.kakaocorp.com/ir/stockInformation" className="wrap-cont">
                                <div role="text">
                                    <span className="info-cate">
                                        <img src={icon['stock'].image} width="36" height="36" alt={icon['stock'].description} className="ico-cate" />
                                        <span className="txt-cate">{icon['stock'].name}</span>
                                    </span>
                                </div>
                                <strong className="tit-card">
                                    <span className="num-tit">3</span>
                                    <span className="num-info down"><span className="screen-out">전일대비</span><span className="info-arr">하락</span>2800</span>
                                </strong>
                                <span role="text" className="info-card">2022.01.14 22:08PM</span>
                            </a>
                        </div>
                        <div className="item-card card-half">
                            <a href="https://www.kakaocorp.com/page/responsible/social" className="wrap-cont">
                                <div role="text">
                                    <span className="info-cate">
                                        <img src={icon['promise'].image} width="36" height="36" alt={icon['promise'].description} className="ico-cate" />
                                        <span className="txt-cate">{icon['promise'].name}</span>
                                    </span>
                                </div>
                                <strong className="tit-card">카카오는 당신과 함께 더 나은 세상을 만듭니다.</strong>
                                <span role="text" className="info-card">
                                    <span className="txt-keyword">#약속과책임</span><span className="txt-keyword">#esg</span><span className="txt-keyword">#소셜임팩트</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
