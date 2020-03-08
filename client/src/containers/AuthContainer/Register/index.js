import React, { Component } from 'react'

import AuthRegisterForm from '../../../components/Auth/RegisterForm'

class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    this.$firstName = React.createRef()
    this.$lastName = React.createRef()
    this.$email = React.createRef()
    this.$password = React.createRef()
    this.$confirmPassword = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()

    if (this.$password.current.value === this.$confirmPassword.current.value) {
      let data = {
        firstName: this.$firstName.current.value,
        lastName: this.$lastName.current.value,
        email: this.$email.current.value,
        password: this.$password.current.value
      }
      console.log('OK Na')

      console.log(data)
    }
  }

  render() {
    return (
      <div>
        <AuthRegisterForm
          onSubmit={this.onSubmit.bind(this)}
          refFirstName={this.$firstName}
          refLastName={this.$lastName}
          refEmail={this.$email}
          refPassword={this.$password}
          refConfirmPassword={this.$confirmPassword}
        />
      </div>
    )
  }
}

export default index
