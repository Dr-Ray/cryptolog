import React from 'react'
import { Link } from 'react-router-dom'

const Nopage = () => {
    return (
        <>
            <div class="fade-appear-done fade-enter-done">
                <div class="container"><br />
                    <Link to="/" >Go Back</Link><br /> <br />
                    <div class="card-panel ">
                        <div class="container">
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
