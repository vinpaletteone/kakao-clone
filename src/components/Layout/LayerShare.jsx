import React from 'react'

export default function LayerShare({showLayer, setShowLayer}) {
    const clickClose = () => {
        document.querySelector('.layer-share').classList.remove('active');
        setTimeout(() => {
            setShowLayer(false);
        }, 300);
    }
    const item = [
        {
            "name" : 'kakao',
            "url" : 'https://www.kakaocorp.com/page/detail/9661?lang=KOR',
            "path" : 'M9.375 1.5C5.025 1.5 1.5 4.393 1.5 7.962c0 2.718 1.151 3.858 2.949 5.042l.01 3.315c0 .149.178.234.303.145L7.827 14.3c.5.082 1.018.125 1.548.125 4.35 0 7.875-2.893 7.875-6.463 0-3.569-3.526-6.462-7.875-6.462'
        },
        {
            "name" : 'facebook',
            "url" : 'https://www.kakaocorp.com/page/detail/9661?lang=KOR',
            "path": 'M9.556 16.5V9.658h2.297l.344-2.667h-2.64V5.289c0-.772.213-1.298 1.321-1.298h1.412V1.604c-.684-.073-1.37-.107-2.058-.105-2.035 0-3.43 1.243-3.43 3.525v1.967H4.5v2.666h2.303V16.5h2.753z'
        },
        {
            "name" : 'twitter',
            "url" : 'https://www.kakaocorp.com/page/detail/9661?lang=KOR',
            "path": 'M6.162 15.75c6.514 0 10.076-5.195 10.076-9.697 0-.149 0-.297-.008-.439.69-.48 1.293-1.081 1.77-1.767-.632.269-1.314.453-2.034.538.734-.425 1.292-1.089 1.557-1.888-.683.39-1.44.672-2.247.827-.647-.664-1.565-1.074-2.585-1.074-1.954 0-3.54 1.527-3.54 3.407 0 .268.03.53.095.777-2.944-.141-5.551-1.498-7.299-3.562-.301.502-.477 1.088-.477 1.71 0 1.18.624 2.227 1.579 2.835-.58-.014-1.124-.17-1.601-.424v.042c0 1.654 1.219 3.025 2.842 3.343-.294.078-.61.12-.933.12-.228 0-.448-.02-.668-.063.448 1.357 1.755 2.34 3.304 2.368-1.211.911-2.739 1.456-4.398 1.456-.287 0-.566-.014-.845-.05 1.55.976 3.415 1.541 5.412 1.541'
        },
        {
            "name" : 'link',
            "url" : 'https://www.kakaocorp.com/page/detail/9661?lang=KOR',
            "path": 'M6.717 11.106l-.887.886c-1.333 1.334-3.496 1.334-4.83 0-1.333-1.334-1.333-3.496 0-4.83l2.146-2.145c1.334-1.334 3.496-1.334 4.83 0',
            "path2": 'M6.276 1.887L7.162 1c1.334-1.333 3.496-1.333 4.83 0 1.334 1.334 1.334 3.497 0 4.83L9.846 7.976c-1.333 1.334-3.496 1.334-4.83 0'
        }
    ]
    return (
        <div className={`layer-share `}>
            <strong className="screen-out">공유하기 레이어</strong>
            <ul className='list-layer'>
                {
                    item.map((i, index)=> {
                        return (
                            <li key={index}>
                                <button type="button" aria-label="카카오톡으로 공유하기, 새창열림" data-url={i.url} className='btn-layer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className={`ico-share-${i.name}`}>
                                        <g fill="none" fillRule="evenodd">
                                            <g transform="translate(-639 -362) translate(639 362)">
                                                <circle cx="18" cy="18" r="18"></circle>
                                                {i.name!=='link' ?
                                                     <g>
                                                        <path d="M0 0H18V18H0z" transform="translate(9 9)"></path>
                                                        <path d={i.path} transform="translate(9 9)" className="fill"></path>
                                                    </g>
                                                    :
                                                    <g className='stroke' strokeWidth="1.227" strokeLinecap="round">
                                                        <g>
                                                            <path d={i.path} transform="translate(9 9) translate(2.25 2.25) translate(.035 .033)"></path>
                                                            <path d={i.path2} transform="translate(9 9) translate(2.25 2.25) translate(.035 .033)">
                                                            </path>
                                                        </g>
                                                    </g>
                                                }
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn-close" onClick={clickClose}>
                <svg data-v-7171d635="" data-v-2bb26b20="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="ico-close"><g data-v-7171d635="" fill="none" fillRule="evenodd" strokeLinecap="square"><g data-v-7171d635="" strokeWidth="1.6"><path data-v-7171d635="" d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5)"></path> <path data-v-7171d635="" d="M0 0.5L16.5 17.5" transform="translate(-547 -167) translate(187 145) translate(360 22) translate(6 5) matrix(-1 0 0 1 17 0)"></path></g></g></svg>
            </button>
        </div>
    )
}
