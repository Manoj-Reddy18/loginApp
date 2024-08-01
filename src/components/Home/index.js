import {Component} from 'react'
import './index.css'
import login from './Login/index.js'
import logout from './Logout/index.js'
import message from './Message/index.js'

class App extends Component {
  state = {messageContent: 'Please Login'}
  clickLogin = () => {
    this.setState({messageContent: 'Wlecome User'}), (<logout />)
  }

  clickLogout = () => {
    this.setState({messageContent: 'Please Login'}), (<login />)
  }

  render() {
    return (
      <div className="container">
        <div className="Sub_container">
          <message message={messageContent} />
          <login />
        </div>
      </div>
    )
  }
}

export default App
