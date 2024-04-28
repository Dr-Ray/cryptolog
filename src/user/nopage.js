import React from 'react'
import { Link } from 'react-router-dom'

const Nopage = () => {
    return (
        <>
            <div className="fade-appear-done fade-enter-done">
                <div className="container"><br />
                    <Link to="/" >Go Back</Link><br /> <br />
                    <div className="cardd-panel ">
                        <div className="container">
                            <h1>404 Error</h1>
                            <p>Page Not Found</p>
                        </div>
                    </div><br /><br />
                </div>
            </div>
        </>
    )
}

export default Nopage
