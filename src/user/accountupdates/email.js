import React from 'react'

const EmailUpdate = () => {
    return (
        <>
            <div class="row"><br />
                <div class="col l6 offset-l3 s12">
                    <div class="card-panel">
                        <center>
                            <h2>UPDATE EMAIL</h2><br />
                            <p>raypeter053@gmail.com</p><br />
                            <form autocomplete="off">
                                <div class="row">
                                    <div class="input-field undefined">
                                        <input type="email" id="email" name="email" autocomplete="new-email" required="" value=""/>
                                        <label class="active" for="email">YOUR NEW EMAIL</label>
                                    </div>
                                </div>
                                <div><button type="submit" class="btn btn-full">UPDATE</button></div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailUpdate