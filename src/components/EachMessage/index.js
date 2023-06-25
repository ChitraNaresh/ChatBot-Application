import {BiLike} from 'react-icons/bi'
import './index.css'

const EachMessage = props => {
  const {eachMessageData, onClickLike} = props
  const {name, message, backgroundColor, id, likesCount, time} = eachMessageData
  const onLike = () => onClickLike(id)
  return (
    <li className="each-message-list">
      <div className={`user-background-icon ${backgroundColor}`}>
        <h1 className="user-name-icon">{name.slice(0, 2).toUpperCase()}</h1>
      </div>
      <div className="user-name-text">
        <h1 className="user-name">
          {name} <span className="time-el">{time}</span>
        </h1>
        <div className="user-message-para">{message}</div>
      </div>
      <div className="like-card">
        <BiLike className="like-icon" onClick={onLike} />
        {likesCount}
        <p className="no-likes">
          {} <span className="like-text">Likes</span>
        </p>
      </div>
    </li>
  )
}

export default EachMessage
