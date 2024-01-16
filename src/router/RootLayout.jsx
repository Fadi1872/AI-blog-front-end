import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import BePart from '../components/BePart/BePart'



function RootLayout() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <BePart />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default RootLayout