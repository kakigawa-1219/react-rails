import React from 'react'
import axios from 'axios'
import App2 from '../App2'
export default function Dashboard(props) {
    const handleLogoutClick = () => {
        axios.delete("http://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                props.handleLogout()
            }).catch(error => console.log("ログアウトエラー", error))
            props.history.push("/")
    }
  
    return (
        <div>
          <h3>ログイン済み</h3>
            <button onClick={handleLogoutClick}>ログアウト</button>
        </div>
    )
}