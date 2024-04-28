import React, { useContext } from 'react'
import { AuthContext } from '../../context';

const EmailUpdate = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <div className="roww"><br />
                <div className="col l6 offset-l3 s12">
                    <div className="cardd-panel">
                        <center>
                            <h2>UPDATE EMAIL</h2><br />
                            <p>{currentUser.email}</p><br />
                            <form autoComplete="off">
                                <div className="roww">
                                    <div className="input-field undefined">
                                        <input type="email" id="email" name="email" autoComplete="new-email" required="" value=""/>
                                        <label className="active" htmlFor="email">YOUR NEW EMAIL</label>
                                    </div>
                                </div>
                                <div><button type="submit" className="btnn btnn-full">UPDATE</button></div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailUpdate
