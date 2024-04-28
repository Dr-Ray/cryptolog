import React, { useContext } from 'react'
import { AuthContext } from '../../context';

const AddressVerification = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <div className="roww">
                <div className="col l6 s12 offset-l3"><br /><br />
                    <div className="cardd-panel">
                        <center>
                            <h2>Address Verification</h2>
                            <p></p>
                        </center><br />
                        <b>City</b> {currentUser.city} <br />
                        <b>State</b> {currentUser.state} <br />
                        <b>Phone</b> {currentUser.phone}<br />
                        <b>Country</b> {currentUser.country}<br />
                        <b>Email address</b>{currentUser.email}
                        <b>Currency</b>{currentUser.currency}
                        <br /><br />
                        <form enctype="multipart/form-data">
                            <div>
                                <div className="file-field input-field">
                                    <div className="btnn btnn-secondary">
                                        <span>select bill</span>
                                        <input type="file" accept=".jpg,.png,.jpeg" id="bill" name="bill" required="" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div><button type="submit" className="btnn btnn-full">Submit</button></div>
                        </form><br />
                        <form autocomplete="off">
                            <div className="roww"></div>
                            <div><button type="submit" className="btnn btnn-secondary btnn-full">SKIP</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressVerification
