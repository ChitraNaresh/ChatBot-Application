import {Component} from 'react'
import {BsThreeDots, BsEmojiSmile} from 'react-icons/bs'
import {v4 as uuid} from 'uuid'
import EmojiPicker from 'emoji-picker-react'
import {FiUsers} from 'react-icons/fi'
import {BiSend} from 'react-icons/bi'
import './index.css'
import EachMessage from '../EachMessage'
import ShowUsers from '../ShowUsers'
const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']
const backgroundUserColors = [
  'background-orange',
  'background-teal',
  'background-green',
  'background-magenta',
  'background-gold',
]
class ChatPage extends Component {
  state = {
    userMessages: [],
    userInput: '',
    noUsers: false,
    showEmoji: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSendBtn = () => {
    const timeValue = new Date()
    const {userInput} = this.state
    const backgroundColorValue =
      backgroundUserColors[Math.ceil((Math.random() * 8 - 1) / 2)]
    const eachMessage = {
      id: uuid(),
      name: user_list[Math.ceil((Math.random() * 8 - 1) / 2)],
      message: userInput,
      backgroundColor: backgroundColorValue,
      likesCount: 0,
      time: timeValue.toLocaleTimeString(),
    }
    this.setState(prevState => ({
      userInput: '',
      userMessages: [...prevState.userMessages, eachMessage],
    }))
  }

  onClickBtn = idValue =>
    this.setState(prevState => {
      const modifiedCountArr = prevState.userMessages.map(eachUserObj => {
        if (idValue === eachUserObj.id) {
          eachUserObj.likesCount = eachUserObj.likesCount + 1
          return eachUserObj
        }
        return eachUserObj
      })
      return {userMessages: modifiedCountArr}
    })
  renderMessages = () => {
    const {userMessages} = this.state
    return (
      <ul className="each-messages-card">
        {userMessages.map(eachUserMessage => (
          <EachMessage
            eachMessageData={eachUserMessage}
            key={eachUserMessage.id}
            onClickLike={this.onClickBtn}
          />
        ))}
      </ul>
    )
  }

  onClickShow = () =>
    this.setState(prevState => ({
      noUsers: !prevState.noUsers,
    }))

  onClickShowEmoji = () =>
    this.setState(prevState => ({
      showEmoji: !prevState.showEmoji,
    }))

  onClickEmoji = event =>
    this.setState(prevState => ({
      userInput: prevState.userInput + event.emoji,
    }))

  render() {
    const {userMessages, userInput, noUsers, showEmoji} = this.state
    return (
      <div className="chat-page-container">
        <div className="header-card">
          <BsThreeDots className="three-btn" />
        </div>
        <div className="chat-body">
          <div>
            <div className="chat-body-header">
              <div className="instructions-card">
                <h1 className="body-header-heading">Instructions</h1>
                <p className="body-header-description">
                  This Channel is For Company Wide Chatter
                </p>
              </div>
              <div>
                <div className="users-icon-number">
                  <p className="users-number"> {user_list.length} | 100</p>
                  <div>
                    <FiUsers className="users-icon" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {noUsers && <ShowUsers usersList={user_list} />}
          </div>
          <div>
            <div className="user-text-container">
              {userMessages.length === 0 ? (
                <p className="show-send-msg">Send Messages!</p>
              ) : (
                this.renderMessages()
              )}
              <div className="emoji-container">
                <div className="emoji-card-container">
                  {showEmoji && (
                    <EmojiPicker
                      onEmojiClick={this.onClickEmoji}
                      className="emoji-card"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="search-card">
              <input
                type="text"
                placeholder="Type Message"
                className="input-el"
                value={userInput}
                onChange={this.onChangeInput}
              />
              <div className="send-smile-card">
                <button className="show-users-btn" onClick={this.onClickShow}>
                  @
                </button>
                <BsEmojiSmile
                  className="input-smile-emoji"
                  onClick={this.onClickShowEmoji}
                />
                {userInput.length > 0 ? (
                  <BiSend
                    className="input-smile-emoji"
                    onClick={this.onSendBtn}
                  />
                ) : (
                  <span className="body-header-heading">Hi!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatPage
