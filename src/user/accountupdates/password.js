import React, { useContext, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context';

const PasswordUpdate = () => {
    const { currentUser } = useContext(AuthContext);

    const [passwordOld, setOldPassword] = useState('');
    const [passwordNew, setNewPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        
        if(passwordNew === passwordConfirm) {
            try {
                let data = {
                    passwordNew,
                    passwordOld,
                    id:currentUser.id
                }
    
                const resp = await fetch('http://localhost:4500/user/account/update/passowrd', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const response = await resp.json();
                setTimeout(() => {
                    setIsloading(false)
                }, 2000)
    
                if (response.status === 200) {
                    toast('Password updated successfully')
                } else {
                    setTimeout(() => {
                        setError(response.message)
                        toast(response.message)
                    }, 2100)
    
                }
    
            } catch (err) {
                setIsloading(false)
                setError(err.message)
            }
        }else{
            
            setIsloading(false)
            toast("Passsword does not match")
            setError("Passsword does not match")
        }

    }
    return (
        <>
            <div className="roww"><br /><br />
                <div className="col l6 offset-l3 s12">
                    <ToastContainer />
                    <div className="cardd-panel">
                        <center>
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <div className="roww">
                                    <div className="input-field undefined">
                                        <input type="password" id="password" name="password" autoComplete="new-password" required="" value={passwordOld}
                                            onChange={(e) => setOldPassword(e.target.value)} aria-autocomplete="list" />
                                        <label className="active" htmlFor="password">password</label>
                                    </div>
                                    <div className="input-field undefined">
                                        <input type="password" id="new_password" name="new_password" autoComplete="new-password" required="" value={passwordNew}
                                            onChange={(e) => setNewPassword(e.target.value)} />
                                        <label className="active" htmlFor="new_password">new password</label>
                                    </div>
                                    <div className="input-field undefined">
                                        <input type="password" id="confirm_new_password" name="confirm_new_password" autoComplete="new-password" required="" value={passwordConfirm}
                                            onChange={(e) => setConfirmPassword(e.target.value)} />
                                        <label className="active" htmlFor="confirm_new_password">confirm new password</label>
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

                                            <div><button type="submit" className="btnn btnn-full">Update</button></div><br /><br />
                                            <br /><br />
                                            {
                                                error && (
                                                    <div className="red black-text lighten-4 card-panel text-center" style={{ "padding": "30px" }}><span>{error}</span><br /></div>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordUpdate
