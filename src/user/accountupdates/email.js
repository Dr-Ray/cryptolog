import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';

const EmailUpdate = () => {
    const { currentUser } = useContext(AuthContext);

    const [email, setEmail] = useState(currentUser.email);
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        try {
            let data = {
                email
            }

            const resp = await fetch('http://localhost:4500/user/account/update/email', {
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
                toast(response.message)
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

    }
    return (
        <>
            <div className="roww"><br />
                <div className="col l6 offset-l3 s12">
                    <div className="cardd-panel">
                        <center>
                            <h2>UPDATE EMAIL</h2><br />
                            <p>{currentUser.email}</p><br />
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <div className="roww">
                                    <div className="input-field undefined">
                                        <input type="email" id="email" name="email" autoComplete="new-email" required="" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <label className="active" htmlFor="email">YOUR NEW EMAIL</label>
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
                            
                                            <div><button type="submit" className="btnn btnn-full">UPDATE</button></div><br /><br />
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

export default EmailUpdate
