import React from 'react'
import { Link } from 'react-router-dom'

const UploadProof = () => {
    return (
        <>
            <section class="container row">
                <div class="col l6 s12 offset-l3">
                    <h4 class="center">Upload Payment Proof</h4><br/>
                        <div class="card-panel center">
                            <form enctype="multipart/form-data">
                                <div>
                                    <div class="file-field input-field">
                                        <div class="btn btn-secondary">
                                            <span>select proof</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="proof" name="proof" required="" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div><button type="submit" class="btn btn-full">Submit</button></div>
                            </form>
                            <br />
                            <Link to="/user/deposits/list">My Deposits</Link>
                            <br />
                            <Link to="/user/">My Dashboard</Link>
                        </div>
                </div>
            </section>
        </>
    )
}

export default UploadProof
