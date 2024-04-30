import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context';
import { ToastContainer, toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';

const PhotoUpdate = () => {
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

            const resp = await fetch("http://localhost:4500/user/account/update/photo", {
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
            <div className="roww app-py-1"><br />
                <div className="col l6 offset-l3 s12">
                    <div className="cardd-panel app-py-1">
                        <center>
                            <h3>Update Photo</h3><br />
                            <img src={`/uploads/images/${currentUser.profilephoto}`} className="circle" height="100px" alt='' />
                            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                <div>
                                    <div className="file-field input-field">
                                        <div className="btnn btnn-secondary">
                                            <span>select photo</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="photo" name="photo" onChange={uploadFile} required />
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
                                            <div><button type="submit" className="btnn btnn-full">Update</button></div>
                                        </>
                                    )
                                }

                            </form>
                            <ToastContainer />
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoUpdate