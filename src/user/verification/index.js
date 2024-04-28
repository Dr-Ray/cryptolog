import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context';

const VerificationHome = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <center>
                <img src={`/uploads/images/${currentUser.profilephoto}`} className="circle" height="150px" alt="" />
                <h2>{currentUser.fullname}</h2>
                <p>VERIFICATIONS</p>
            </center>
            <div className="roww">
                <div className="col l6 s12 offset-l3">
                    <ul className="collection">
                        <Link className="collection-item bg" to="/user/account/verification/email">
                            <li>
                                <div style={{ "padding": "1rem 1rem 0.8rem", "background": "rgb(181, 72, 198)", "borderRadius": "10px", "display": "inline-block", "marginRight": "1rem" }}>
                                    <span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>mail</span>
                                </div>
                                Email Verification
                                <span style={{ "color": "silver", "fontSize": "12px" }}>Skipped</span>
                            </li>
                        </Link>
                        <Link className="collection-item bg" to="/user/account/verification/identity">
                            <li>
                                <div style={{ "padding": "1rem 1rem 0.8rem", "background": "rgb(225, 85, 93)", "borderRadius": "10px", "display": "inline-block", "marginRight": "1rem" }}>
                                    <span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>person</span>
                                </div>
                                Identity Verification
                                <span style={{ "color": "silver", "fontSize": "12px" }}>Skipped</span>
                            </li>
                        </Link>
                        <Link className="collection-item bg" to="/user/account/verification/address">
                            <li>
                                <div style={{ "padding": "1rem 1rem 0.8rem", "background": "rgb(82, 82, 152)", "borderRadius": "10px", "display": "inline-block", "marginRight": "1rem" }}>
                                    <span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>home</span>
                                </div>
                                Address Verification
                                <span style={{ "color": "silver", "fontSize": "12px" }}>Skipped</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default VerificationHome
