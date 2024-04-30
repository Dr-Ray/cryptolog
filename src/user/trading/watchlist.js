import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context';
import IndexPrices from '../../prices';

const UserWatchList = () => {

    const { currentUser } = useContext(AuthContext);

    const [ gen, setGen ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:4500/user/account/update/passowrd', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ id: currentUser.id })
            });
            setGen(resp);
        }
        fetchData();
    }, [currentUser.id])
    return (
        <>
            <div>
                <ul class="collection">
                    {
                        gen?.map((data, index) => (
                            <IndexPrices data={data} key={index} addToWish={false} />
                        ))
                    }
                </ul>
                <br /><br />
            </div>
        </>
    )
}

export default UserWatchList
