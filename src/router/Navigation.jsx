import React from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from '../pages/Home'
import News from '../pages/News'
import BlogOpen from '../pages/BlogOpen'
import Podcasts from '../pages/Podcasts'
import Resources from '../pages/Resources'
import Contact from '../pages/Contact'

function Navigation() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/AI-blog-front-end' element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='blog' element={<Outlet />} >
                    <Route path='news' element={<News />} />
                    <Route path=':id' element={<BlogOpen />} />
                </Route>
                <Route path='podcast' element={<Podcasts />} />
                <Route path='resources' element={<Resources />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        )
    )

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Navigation