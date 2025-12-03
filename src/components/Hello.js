

const Hello = ({user,onLogout}) => { 
  return (
    <div id="hello-page">
      <p>Hello,{user}</p>
      <button onClick={onLogout}>LOGIN OUT</button>
    </div>
  )
}
export default Hello