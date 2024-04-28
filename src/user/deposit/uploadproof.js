import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import uploadFile from '../../component/uploadfile'


const UploadProof = () => {
    const [filename, setFilename] = useState('');

    const uploadFile = (e) => {
        setFilename(e.target.files[0].name)

        // upload file to return id
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(e)
    }
    
    return (
        <>
            <section className="container roww">
                <div className="col l6 s12 offset-l3">
                    <h4 className="center">Upload Payment Proof</h4><br/>
                        <div className="cardd-panel center">
                            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                <div>
                                    <div className="file-field input-field">
                                        <div className="btnn btnn-secondary">
                                            <span>Select Proof</span>
                                            <input 
                                                type="file" 
                                                accept=".jpg,.png,.jpeg" 
                                                id="proof" 
                                                name="proof" 
                                                onChange={uploadFile}
                                                required
                                            />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" defaultValue={filename}/>
                                        </div>
                                    </div>
                                </div>
                                <div><button type="submit" className="btnn btnn-full">Submit</button></div>
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
