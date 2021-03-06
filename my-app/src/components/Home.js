import React from 'react'
import Registration from './auth/Registration'

export default function Home(props) {

    // 追加
    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }
  
    return (
        <div>
        <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
        
    </div>
    )
}