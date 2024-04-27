import React from 'react'

const LoadingSpinner = () => {
  return (
    // <page loader begin 
    <div className="page-loader w-100 h-100 bg-white d-flex justify-content-center align-items-center position-fixed overflow-hidden">
        <div className="spinner-grow spinner-grow-sm text-primary"></div>
        <div className="spinner-grow spinner-grow-sm text-primary"></div>
        <div className="spinner-grow spinner-grow-sm text-primary"></div>
    </div>
    //  page loader end 
  )
}

export default LoadingSpinner
