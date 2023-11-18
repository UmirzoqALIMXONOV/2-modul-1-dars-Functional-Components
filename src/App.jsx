import { useState } from "react"

const App = () => {

  const [user, setUser] = useState({ firstName: "AAA", lastName: "BBB"})

  var ChangeName = () => {
    user.firstName="Ulugbek"
    
    var a = {...user}

    setUser(a)
  }
  return (
    <div className="container">
      { console.log(user)}
      <h1>{user.firstName + " " + user.lastName}</h1>

      <button onClick={ChangeName}>changeName</button>
    </div>
  )
}

export default App