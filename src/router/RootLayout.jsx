import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import BePart from '../components/BePart/BePart'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import SectionTitle_GroupButtons from '../components/SectionTitle_groupButtons/SectionTitle_GroupButtons'
import SectionTitle_Button from '../components/SectionTitle_button/SectionTitle_Button'




function RootLayout() {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            {/* 
            <SectionTitle_Button subtitle='Welcome to Our News Hub' title='Discover the World of Headlines'  buttontext ='View All News'/>
            <SectionTitle  subtitle='Stay Informed with Fresh Content' title='Latest Podcast Episodes' />
            <SectionTitle_GroupButtons subtitle='Dive into the Details' title='In-Depth Reports and Analysis' /> */}



            <BePart />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default RootLayout