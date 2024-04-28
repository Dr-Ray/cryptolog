import React, { useContext } from 'react'
import { AuthContext } from '../../context';

const PhotoUpdate = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <div className="roww app-py-1"><br />
                <div className="col l6 offset-l3 s12">
                    <div className="cardd-panel app-py-1">
                        <center>
                            <h3>Update Photo</h3><br />
                            <img src={`/uploads/images/${currentUser.profilephoto}`} className="circle" height="100px" alt='' />
                            <form encType="multipart/form-data">
                                <div>
                                    <div className="file-field input-field">
                                        <div className="btnn btnn-secondary">
                                            <span>select photo</span>
                                            <input type="file" accept=".jpg,.png,.jpeg" id="photo" name="photo" required="" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div><button type="submit" className="btnn btnn-full">Update</button></div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoUpdate
