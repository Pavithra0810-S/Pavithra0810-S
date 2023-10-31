import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribedBtn = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="welcome-app-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribedBtn}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
