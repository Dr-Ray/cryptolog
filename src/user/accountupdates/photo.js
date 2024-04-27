import React from 'react'

const PhotoUpdate = () => {
    return (
        <>
            <div class="roww app-py-1"><br />
                <div class="col l6 offset-l3 s12">
                    <div class="cardd-panel app-py-1">
                        <center>
                            <h3>Update Photo</h3><br />
                            <img src="/uploads/images/human.png" class="circle" height="100px" alt=''/>
                                <form enctype="multipart/form-data">
                                    <div>
                                        <div class="file-field input-field">
                                            <div class="btnn btnn-secondary">
                                                <span>select photo</span>
                                                <input type="file" accept=".jpg,.png,.jpeg" id="photo" name="photo" required="" />
                                            </div>
                                            <div class="file-path-wrapper">
                                                <input class="file-path validate" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div><button type="submit" class="btnn btnn-full">Update</button></div>
                                </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoUpdate
