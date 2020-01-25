import React from 'react'
import Login from './Login'
import Admin from './Admin'


export default class Welcome extends React.Component {

    state = {
        response: false,
    }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
    console.log(auth)

    if(auth === null || auth === ""){}
    else{

      try {
        const res = await fetch('http://ranq.xyz/api/isloggedin/', {

        credentials: 'same-origin',
        mode: 'cors',
        headers : {
         'Authorization' : 'Token ' + auth
        }

        })
        .then(response => {
          if (response.status === 200) {
            this.setState({ response: true})
          } else {
          
          }
        })

        console.log(this.state.response)
      } catch (e) {
        console.log(e);
      }
    }

      this.setState({ show_welcome: true})
  }



  render(){
      return(
        <div>

          { this.state.response ? (
            <Admin/>
          ): (
            <Login/>
          )}


        </div>
      )
  }

}
