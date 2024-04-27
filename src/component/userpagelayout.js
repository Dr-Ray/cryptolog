import React, { useContext } from 'react'
import TopNav from './topnav'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { AuthContext } from '../context';

const HomePageLayout = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(AuthContext);
 
  useEffect(() => {
    // Checking if user is not loggedIn
    if (!isLoggedIn) {
      navigate("/login");
    } 
  }, [navigate, isLoggedIn]);
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
