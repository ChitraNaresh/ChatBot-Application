import './index.css'

const ShowUsers = props => {
  const {usersList} = props
  return (
    <ul className="list-users">
      <li className="users">USERS</li>
      <li className="user">{usersList[0]}</li>
      <li className="user">{usersList[1]}</li>
      <li className="user">{usersList[2]}</li>
      <li className="user">{usersList[3]}</li>
      <li className="user">{usersList[4]}</li>
    </ul>
  )
}

export default ShowUsers
