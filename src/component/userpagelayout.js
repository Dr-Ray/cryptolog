import React from 'react'
import TopNav from './topnav'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () => {
  return (
    <>
        <div className='r-app'>
            <TopNav />
            <main className="app-py-1">
                <div className="fade-appear-done fade-enter-done">
                    <Outlet />
                </div>
            </main>
        </div>
    </>
  )
}

export default HomePageLayout
