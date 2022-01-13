import React from 'react'
import { Header, Footer, Title, ItemCard, ClickBtn } from '../js/component';

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <Title />
                <ItemCard />
                <ClickBtn />
            </main>
            <Footer />
        </>
    )
}
