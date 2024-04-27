import React from 'react'

const WithdrawalList = () => {
  return (
    <>
      <div class="container app-py-1">
    <center><button class="btn btn-large">NEW WITHDRAWAL</button><br/></center>
    <ul class="collection">
        <li class="collection-item app-py-2">
            <p id="no-data" style={{"text-Align": "center"}}><span class="app-font-normal">NO WITHDRAWAL YET</span></p>
        </li>
    </ul>
</div>
    </>
  )
}

export default WithdrawalList
