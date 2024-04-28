import React from 'react'

const IdentityVerification = () => {
    return (
        <>
            <div className="row">
                <div className="col l4 s12 offset-l4">
                    <div className="cardd-panel">
                        <h3 className="btnn-color center">Verify Your Identity</h3>
                        <p style={{ "textAlign": "justify" }}>
                            Please verify your identity by uploading a valid government issued identification card.
                            You may experience difficulties when uploading from an ios device.
                            Make sure your browser has camera access in your ios settings.
                        </p>
                        <center><br />
                            <form enctype="multipart/form-data">
                                <div>
                                    <div className="file-field input-field">
                                        <div className="btnn btnn-secondary">
                                            <span>select front</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="front" name="front" required="" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="file-field input-field">
                                        <div className="btnn btnn-secondary">
                                            <span>select back</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="back" name="back" required="" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div><button type="submit" className="btnn btnn-full">Upload</button></div>
                            </form><br />
                        </center>
                    </div><br /><br />
                </div>
            </div>
        </>
    )
}

export default IdentityVerification
