import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home2 from './components/Home2'
import Dashboard from './components/Dashboard'
import axios from 'axios'
export default function App_login() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
  }
  useEffect(() => {
    checkLoginStatus()
  })
  const handleLogout = () => {
    setLoggedInStatus("未ログイン")
    setUser({})
  }
  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })

    .then(response => {
      if (response.data.logged_in && loggedInStatus === "未ログイン") {
        setLoggedInStatus("ログインなう")
        setUser(response.data.user)
      } else if (!response.data.logged_in && loggedInStatus === "ログインなう") {
        setLoggedInStatus("未ログイン")
        setUser({})
      }
    })

    .catch(error => {
      console.log("ログインエラー", error)
  })

  }
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route
            exact path={"/"}
            render={props => (
              <Home2
                {...props}
                handleLogin={handleLogin}
                // 追加する
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          
           <Route
            exact path={"/"}
            render={props => (
              <Dashboard { ...props } loggedInStatus={loggedInStatus} />
            )}
          />
          <Route exact path={"/"} component={Home2} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}