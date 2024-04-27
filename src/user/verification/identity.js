import React from 'react'

const IdentityVerification = () => {
    return (
        <>
            <div class="row">
                <div class="col l4 s12 offset-l4">
                    <div class="card-panel">
                        <h3 class="btn-color center">Verify Your Identity</h3>
                        <p style={{ "textAlign": "justify" }}>
                            Please verify your identity by uploading a valid government issued identification card.
                            You may experience difficulties when uploading from an ios device.
                            Make sure your browser has camera access in your ios settings.
                        </p>
                        <center><br />
                            <form enctype="multipart/form-data">
                                <div>
                                    <div class="file-field input-field">
                                        <div class="btn btn-secondary">
                                            <span>select front</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="front" name="front" required="" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="file-field input-field">
                                        <div class="btn btn-secondary">
                                            <span>select back</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="back" name="back" required="" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div><button type="submit" class="btn btn-full">Upload</button></div>
                            </form><br />
                        </center>
                    </div><br /><br />
                </div>
            </div>
        </>
    )
}

export default IdentityVerification
