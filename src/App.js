import { useEffect, useState } from "react"
import Hello from "./components/Hello"
import Login from "./components/Login"
import Weather from "./components/Weather"
import Todos from "./components/Todos"
import Quotes from "./components/Quotes"
import Clock from "./components/Clock"
import './Style.css';



const App = () => {
  const [userName, setUserName] = useState(null);
  const handleLogin = (data)=>{
    localStorage.setItem("USER_NAME",data);
    setUserName(data);
  }
  const handleLogout = ()=>{
    // localStorage.removeItem("USER_NAME");
    localStorage.clear();
    // setUserName('');
    //전체 페이지 새로고침
    window.location.reload();
  }
  useEffect(()=>{
    //로컬 스토리지에 userName이 있는 체크
    const saved = localStorage.getItem("USER_NAME"); 
    setUserName(saved);
  },[]);
  return (
    <div id="app">
      <Weather />
      <Clock />
          {
        userName ? (
          <Hello user={userName} onLogout={handleLogout}/>
          ) : (
          <div id="login-wrap">
          <Login onLogin={handleLogin}/>
          <Todos />
          </div>
              )
          }
      <Quotes />
    </div>
  )
}

export default App