import React, { Component } from 'react'

import AuthLoginForm from '../../../components/Auth/LoginForm'

class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.$email = React.createRef()
    this.$password = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()
    let data = {
      email: this.$email.current.value,
      password: this.$password.current.value
    }

    this.setState(data)
  }

  render() {
    return (
      <div>
        <AuthLoginForm
          onSubmit={this.onSubmit.bind(this)}
          refEmail={this.$email}
          refPassword={this.$password}
        />
      </div>
    )
  }
}

export default index
