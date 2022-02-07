import React from 'react'

export default function LinkTop() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <a href="#javascript" className='link-top' onClick={handleScrollTop}>
            <span role='text'>
            <span className="screen-out">맨 위로 이동</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="ico-top"><g  fill="none" fillRule="evenodd"><g  transform="translate(-1318 -4124) translate(1318 4124)"><circle  cx="25" cy="25" r="25"></circle> <g  strokeWidth="1.5" className="stroke"><path  d="M8.467 16.933L0 8.467 8.467 0M.085 8.467L19.918 8.534" transform="rotate(90 9.5 24)"></path></g></g></g></svg>
            </span>
        </a>
    )
}
