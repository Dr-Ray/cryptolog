import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context';
import { InfinitySpin } from 'react-loader-spinner';



const UploadProof = () => {
    const [filename, setFilename] = useState('');
    const { currentUser } = useContext(AuthContext);
    const [isLoading, setIsloading] = useState(false);

    const uploadFile = (e) => {
        setFilename(e.target.files[0].name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsloading(true);

        try {
            const formData = new FormData();
            formData.append("uploader_id", currentUser.id);
            for (let i = 0; i < e.target.proof.files.length; i++) {
                formData.append(`files`, e.target.proof.files[i]);
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
                toast("Upload successfull")
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
            <section className="container roww">
                <div className="col l6 s12 offset-l3">
                    <h4 className="center">Upload Payment Proof</h4><br />
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
                                        <input className="file-path validate" type="text" defaultValue={filename} />
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

                        </form>

                        <ToastContainer />
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
