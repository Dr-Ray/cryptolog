import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context';

const DepositSingle = () => {
  const { currentUser } = useContext(AuthContext);
  const [depost, setDeposit] = useState({})
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4500/user/deposits/fund/:${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
      })
      const response = await data.json();
      console.log(response)
      setDeposit(response)
    }
    fetchData();
  }, [id])
  return (
    <>
      <section className="container">
        <div className="cardd-panel">
          <div className="roww">
            <div className="col l3 s12 center">
              <p><Link to={`/user/deposits/fund/step3/fund/${depost.amount}/trading_deposit`}>Make Payment</Link></p>
              <p><Link to={`/user/deposits/upload-proof/${depost.id}`}>Upload Payment Proof</Link></p><br/>
            </div>
            <div className="col l9 s12">
              <table className="striped">
                <tbody>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>Date</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{depost.createdAt}</td>
                  </tr>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>Status</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{depost.status}</td>
                  </tr>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>Amount</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>${depost.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DepositSingle
