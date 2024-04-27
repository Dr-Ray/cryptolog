import React from 'react'

const AddressVerification = () => {
    return (
        <>
            <div class="row">
                <div class="col l6 s12 offset-l3"><br /><br />
                    <div class="card-panel">
                        <center>
                            <h2>Address Verification</h2>
                            <p></p>
                        </center><br />
                        <b>City</b> Abijan <br />
                        <b>State</b> Lesotho <br />
                        <b>Zip Code</b> <br />
                        <b>Country</b> South Africa<br />
                        <b>Street Address</b>
                        <br /><br />
                        <form enctype="multipart/form-data">
                            <div>
                                <div class="file-field input-field">
                                    <div class="btn btn-secondary">
                                        <span>select bill</span>
                                        <input type="file" accept=".jpg,.png,.jpeg" id="bill" name="bill" required="" />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div><button type="submit" class="btn btn-full">Submit</button></div>
                        </form><br />
                        <form autocomplete="off">
                            <div class="row"></div>
                            <div><button type="submit" class="btn btn-secondary btn-full">SKIP</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressVerification
