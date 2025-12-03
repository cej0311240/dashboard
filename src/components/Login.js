import { useState } from "react"

const Login = ({onLogin}) => {
  const [user,setUser] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();  //이미 있는 기능 실행 방지
    onLogin(user);
  }
  return (
    <form id="login-page" onSubmit={handleSubmit}>
      <h2>Hello, What’s your name?</h2>
      <div className="input-row">
      <input
        type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
      />
      <button type="submit">LOGIN</button>
      </div>
    </form>
  )
}

export default Login