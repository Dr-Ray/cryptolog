import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context';
import { ToastContainer, toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';

const AddressVerification = () => {
    const { currentUser } = useContext(AuthContext);
    const [isLoading, setIsloading] = useState(false);
    const [filename, setFilename] = useState('');

    const uploadFile = (e) => {
        setFilename(e.target.files[0].name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsloading(true);

        try {
            const formData = new FormData();
            formData.append("uploader_id", currentUser.id);
            for (let i = 0; i < e.target.bill.files.length; i++) {
                formData.append(`files`, e.target.bill.files[i]);
            }

            const resp = await fetch("http://localhost:4500/user/deposits/fund/proof", {
                method: 'POST',
                body: formData,
            });

            const response = await resp.json();
            setTimeout(() => {
                setIsloading(false)
            }, 2000)

            if (response.status === 200) {
                toast(response.message)
            } else {
                setTimeout(() => {
                    toast(response.message)
                }, 2100)
            }

        } catch (err) {
            setIsloading(false)
            toast(err.message)
        }
    }
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
                        <b>Email address</b> {currentUser.email}<br />
                        <b>Currency</b> {currentUser.currency}
                        <br /><br />
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div>
                                <div className="file-field input-field">
                                    <div className="btnn btnn-secondary">
                                        <span>select bill</span>
                                        <input type="file" accept=".jpg,.png,.jpeg" id="bill" name="bill" onChange={uploadFile} required />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" defaultValue={filename}/>
                                    </div>
                                </div>
                            </div>
                            {
                                isLoading ? (
                                    <InfinitySpin
                                        visible={true}
                                        width="200"
                                        color="#4fa94d"
                                        ariaLabel="infinity-spin-loading"
                                    />
                                ) : (
                                    <>
                                        <div><button type="submit" className="btnn btnn-full">Submit</button></div>
                                    </>
                                )
                            }
                        </form><br />
                        
                    <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressVerification
