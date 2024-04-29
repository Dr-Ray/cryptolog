import React, { useContext, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../../context';
import { ToastContainer, toast } from 'react-toastify';

const IdentityVerification = () => {
    const { currentUser } = useContext(AuthContext);
    const [filename1, setFilename1] = useState('');
    const [filename2, setFilename2] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const uploadFile1 = (e) => {
        setFilename1(e.target.files[0].name)

        // upload file to return id
    }

    const uploadFile2 = (e) => {
        setFilename2(e.target.files[0].name)

        // upload file to return id
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
            <div className="row">
                <div className="col l4 s12 offset-l4">
                    <div className="cardd-panel">
                        <h3 className="btnn-color center">Verify Your Identity</h3>
                        <p style={{ "textAlign": "justify" }}>
                            Please verify your identity by uploading a valid government issued identification card.
                            You may experience difficulties when uploading from an ios device.
                            Make sure your browser has camera access in your ios settings.
                        </p>
                        <div className="container">
                            <center><br />
                                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="file-field input-field">
                                            <div className="btnn btnn-secondary">
                                                <span>select front</span>
                                                <input
                                                    type="file"
                                                    accept=".jpg,.png,.jpeg"
                                                    id="front"
                                                    name="front"
                                                    required
                                                    onChange={uploadFile1}
                                                />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path validate" type="text" value={filename1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="file-field input-field">
                                            <div className="btnn btnn-secondary">
                                                <span>select back</span>
                                                <input
                                                    type="file"
                                                    accept=".jpg,.png,.jpeg"
                                                    id="back"
                                                    name="back"
                                                    required
                                                    onChange={uploadFile2}
                                                />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path validate" type="text" value={filename2} />
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
                                                <div><button type="submit" className="btnn btnn-full">Upload</button></div>
                                            </>
                                        )
                                    }

<ToastContainer />
                                </form><br />
                            </center>
                        </div>
                    </div><br /><br />
                </div>
            </div>
        </>
    )
}

export default IdentityVerification
