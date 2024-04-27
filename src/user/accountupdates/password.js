import React from 'react'

const PasswordUpdate = () => {
    return (
        <>
            <div class="row"><br /><br />
                <div class="col l6 offset-l3 s12">
                    <div class="card-panel">
                        <center>
                            <form autocomplete="off">
                                <div class="row">
                                    <div class="input-field undefined">
                                        <input type="password" id="password" name="password" autocomplete="new-password" required="" value="" aria-autocomplete="list" />
                                        <label class="active" for="password">password</label>
                                    </div>
                                    <div class="input-field undefined">
                                        <input type="password" id="new_password" name="new_password" autocomplete="new-password" required="" value="" />
                                        <label class="active" for="new_password">new password</label>
                                    </div>
                                    <div class="input-field undefined">
                                        <input type="password" id="confirm_new_password" name="confirm_new_password" autocomplete="new-password" required="" value="" />
                                        <label class="active" for="confirm_new_password">confirm new password</label>
                                    </div>
                                </div>
                                <div><button type="submit" class="btn btn-full">Update</button></div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordUpdate
