import React from 'react'

const PasswordUpdate = () => {
    return (
        <>
            <div className="roww"><br /><br />
                <div className="col l6 offset-l3 s12">
                    <div className="cardd-panel">
                        <center>
                            <form autoComplete="off">
                                <div className="roww">
                                    <div className="input-field undefined">
                                        <input type="password" id="password" name="password" autoComplete="new-password" required="" value={''} aria-autocomplete="list" />
                                        <label className="active" htmlFor="password">password</label>
                                    </div>
                                    <div className="input-field undefined">
                                        <input type="password" id="new_password" name="new_password" autoComplete="new-password" required="" value={''} />
                                        <label className="active" htmlFor="new_password">new password</label>
                                    </div>
                                    <div className="input-field undefined">
                                        <input type="password" id="confirm_new_password" name="confirm_new_password" autoComplete="new-password" required="" value={''} />
                                        <label className="active" htmlFor="confirm_new_password">confirm new password</label>
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

export default PasswordUpdate
