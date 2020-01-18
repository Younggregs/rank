import React from 'react'
import { Redirect } from 'react-router-dom'


export default class Logout extends React.Component {
     componentWillMount() {
      localStorage.setItem('auth_code', '')
    }


      render(){
          return(
            <div>
              <Redirect to='/'/>
            </div>
          )
      }
}
