import React from 'react'
import Login from './auth/Login'

export default function Home2(props) {

    // 追加
    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }
  
    return (
        <div>
     
        <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
    )
}