// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', showSubmitErr: false, errmsg: ''}

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  renderUserNameFile = () => {
    const {userName} = this.state
    return (
      <>
        <label htmlFor="username" className="name-input">
          USERNAME
        </label>
        <input
          id="username"
          placeholder="Username"
          type="text"
          className="username-input-filled"
          value={userName}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordFile = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="password-input">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="userPassword-input"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onLoginFailure = errmsg => {
    this.setState({showSubmitErr: true, errmsg})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const body = await response.json()
    if (response.ok) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.err_msg)
    }
  }

  render() {
    const {showSubmitErr, errmsg} = this.state
    return (
      <div className="loginPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="loginImg"
          />
          <div>{this.renderUserNameFile()}</div>
          <div>{this.renderPasswordFile()}</div>
          <button type="submit" className="button">
            Login
          </button>
          {showSubmitErr && <p className="err-message">{errmsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
