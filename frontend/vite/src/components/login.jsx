import React from 'react'

function login() {
  return (
    <div>
        <h1>Login to Your Account</h1>
        <div>
            <label htmlFor="">Email address</label>
            <input type="text" />

            <label htmlFor="">Password</label>
            <input type="password" />

            <div>
                <input type="checkbox" />
                <p>remember me</p>

                <h4>Forgot Your Password</h4>

            </div>
             <input type="submit" value="submit"/>

             <h4>Not Have An Account ?</h4>
        </div>
    </div>
  )
}

export default login